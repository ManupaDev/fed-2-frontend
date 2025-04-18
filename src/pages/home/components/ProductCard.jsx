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
      </div>
      <div className="mt-3 space-y-3">
        <div>
          <span className="text-lg font-medium block">{name}</span>
          <span className="text-lg block">${price?.toFixed(2)}</span>
        </div>
        <Button 
          onClick={handleClick} 
          className="w-full transition-all duration-300"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
