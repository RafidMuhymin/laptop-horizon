import { Icon } from "@iconify/react";

export default function Laptop({ laptop }) {
  const { name, price, image } = laptop;

  return (
    <div className="laptop">
      <img src={image} alt={name} className="mw-100" />
      <div className="p-3 text-center">
        <h3>{name}</h3>
        <p className="fs-5">Price: ${price}</p>
        <button className="btn btn-primary w-100 gap-1 d-inline-flex justify-content-between align-items-center">
          Add to Cart
          <Icon icon="ant-design:shopping-cart-outlined" />
        </button>
      </div>
    </div>
  );
}
