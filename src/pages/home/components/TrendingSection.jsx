import { useState } from 'react';
import SimpleProductCard from './SimpleProductCard';
import CategoryButton from './CategoryButton';
import { useGetCategoriesQuery, useGetProductsQuery } from '@/lib/api';
function TrendingSection() {
  
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
    return ((index + 1) === 3 || (index + 1) === 4)?  2 : 1;
  };

  return (
    <section className="px-16 py-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl">Trending</h2>
        <div className="flex items-center gap-x-4">
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
      <div className="grid grid-cols-4 mt-4 gap-x-4 gap-y-8">
        {filteredProducts?.map((product, index) => (
          <SimpleProductCard 
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            colSpan={getColSpan(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection; 