import { useState } from 'react';
import SimpleProductCard from './SimpleProductCard';
import CategoryButton from './CategoryButton';
import { useGetCategoriesQuery, useGetProductsQuery } from '@/lib/api';
import { useMediaQuery } from "@uidotdev/usehooks";

function TrendingSection() {
  
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const { data: categories, isLoading: categoriesLoading } = useGetCategoriesQuery();
  
  const { data: trendingProducts, isLoading: productsLoading } = useGetProductsQuery({
    featured: true
  });

  const [selectedCategoryId, setSelectedCategoryId] = useState("67dee99f12d36efdd1027b40"); // Default to SHOES
  
  const handleCategoryClick = (categoryId) => {
    console.log(categoryId);
    setSelectedCategoryId(categoryId);
  };

  // Filter products by selected category
  const filteredProducts = trendingProducts?.filter(
    product => product.categoryId === selectedCategoryId
  );

  /**
   * Helper function to determine colSpan based on index pattern
   * Every 3rd product (indices 2, 5, 8, etc.) will have colSpan=2
   */
  const getColSpan = (index) => {
    // For mobile, all items will be single column
    return ((index + 1) === 3 || (index + 1) === 4) ? 2 : 1;
  };

  return (
    <section className="px-4 lg:px-16 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h2 className="text-2xl sm:text-3xl">Trending</h2>
        <div className="flex flex-wrap items-center gap-2 sm:gap-x-4 max-w-full overflow-x-auto pb-2">
          {categories?.map((category) => (
            <CategoryButton
              key={category._id}
              category={category}
              isSelected={category._id === selectedCategoryId}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4 md:gap-x-4 md:gap-y-8">
        {filteredProducts?.map((product, index) => (
          <SimpleProductCard 
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            colSpan={!isMediumDevice ? getColSpan(index) : 1}
          />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection; 