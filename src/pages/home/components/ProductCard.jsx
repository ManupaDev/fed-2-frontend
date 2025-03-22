import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cartSlice";

function ProductCard(props) {
  const { image, name, price, _id, description } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addToCart({
        _id,
        name,
        price,
        image,
        description,
      })
    );
  };

  return (
    <div className="group cursor-pointer">
      <div className="h-96 relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-end justify-center">
          <Button 
            onClick={handleClick} 
            className="mb-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-lg font-medium block">{name}</span>
        <span className="text-lg block">${price?.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default ProductCard;
