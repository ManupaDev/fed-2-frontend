import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import { useGetCategoriesQuery } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function ShopFilters() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const selectedColor = queryParams.get("color");

  const { data: categories, isLoading: categoriesLoading } =
    useGetCategoriesQuery();

  // This would normally come from an API but we'll simulate it
  const colors = [
    { slug: "resin", name: "Resin", hex: "#6C7C59" },
    { slug: "pimento", name: "Pimento", hex: "#BF3B2F" },
    { slug: "bright_ceramic", name: "Bright Ceramic", hex: "#FFA500" },
    { slug: "black", name: "Black", hex: "#000000" },
    { slug: "white", name: "White", hex: "#FFFFFF" },
  ];

  const handleCategoryClick = (categorySlug) => {
    // If we're already on this category, go back to all products
    if (category === categorySlug) {
      navigate("/shop");
    } else {
      navigate(`/shop/${categorySlug}${location.search}`);
    }
  };

  const handleColorClick = (colorSlug) => {
    const params = new URLSearchParams(location.search);

    // If we're already filtering by this color, remove the filter
    if (selectedColor === colorSlug) {
      params.delete("color");
    } else {
      params.set("color", colorSlug);
    }

    const queryString = params.toString();
    const path = category ? `/shop/${category}` : "/shop";
    navigate(`${path}${queryString ? `?${queryString}` : ""}`);
  };

  const clearAllFilters = () => {
    navigate("/shop");
  };

  const hasActiveFilters = category || selectedColor;

  return (
    <div className="space-y-6">
      {hasActiveFilters && (
        <div className="mb-4">
          <Button variant="outline" size="sm" onClick={clearAllFilters}>
            Clear All Filters
          </Button>
        </div>
      )}
      <div>
        <h3 className="text-lg font-medium mb-3">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div
              key={color.slug}
              onClick={() => handleColorClick(color.slug)}
              className={`cursor-pointer w-8 h-8 rounded-full border-2 ${
                selectedColor === color.slug
                  ? "ring-2 ring-black ring-offset-2"
                  : "ring-1 ring-gray-300"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopFilters;
