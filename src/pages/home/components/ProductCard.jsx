import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cartSlice";

function ProductCard({ image, name, price }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(
      addToCart({
        _id: props._id,
        name: props.name,
        price: props.price,
        image: props.image,
        description: props.description,
      })
    );
  };

  return (
    <div>
      <div className="h-96">
        <img
          src={image}
          alt={name}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>
      <div className="mt-2">
        <span className="text-2xl block">{name}</span>
        <span className="text-xl block">${price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
