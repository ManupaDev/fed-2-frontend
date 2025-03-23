import { useParams, useLocation } from "react-router";
import { useGetProductsQuery } from "@/lib/api";
import ProductCard from "@/pages/home/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import ShopFilters from "./components/ShopFilters";
import { Separator } from "@/components/ui/separator";

function ShopPage() {
  const { category } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const color = queryParams.get("color");

  // Fetch products based on category and color filters
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({
    categorySlug: category,
    colorSlug: color,
  });

  // Create loading skeleton placeholders for products
  const ProductSkeleton = () => (
    <div className="space-y-3">
      <Skeleton className="h-96 w-full rounded-2xl" />
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-4 w-1/3" />
    </div>
  );

  return (
    <div className="px-4 lg:px-16 min-h-screen pb-8">
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-8">Shop</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters sidebar */}
        <div className="lg:col-span-1">
          <ShopFilters />
        </div>

        <div className="lg:col-span-3">
          {error && (
            <div className="text-center py-10 text-red-500">
              <p className="text-xl">Error loading products: {error.message}</p>
            </div>
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : products && products.length === 0 ? (
            <div>
              <p className="text-xl">
                No products found with the selected filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products?.map((product) => (
                <ProductCard
                  key={product._id}
                  _id={product._id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
