import { Icon } from "@iconify/react";

export default function Laptop({ laptop, selectedLaptopsState }) {
  const { name, price, image } = laptop;

  const [selectedLaptops, setSelectedLaptops] = selectedLaptopsState;

  const handleAddToCart = () => {
    setSelectedLaptops([...selectedLaptops, laptop]);
  };

  return (
    <div className="d-flex flex-column">
      <img src={image} alt={name} className="mw-100" />

      <div className="p-3 pb-4 text-center flex-grow-1 d-flex flex-column justify-content-between">
        <h3>{name}</h3>
        <p className="fs-5">Price: ${price}</p>
        <button
          onClick={handleAddToCart}
          className="btn btn-primary px-3 mx-auto gap-2 d-inline-flex justify-content-between align-items-center"
        >
          Add to Cart
          <Icon icon="ant-design:shopping-cart-outlined" />
        </button>
      </div>
    </div>
  );
}
