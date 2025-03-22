function SimpleProductCard({ image, name, price }) {
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

export default SimpleProductCard; 