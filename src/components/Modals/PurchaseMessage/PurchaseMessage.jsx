import { useState } from "react";

export default function PurchaseMessage({ laptop, setModalIsOpen }) {
  const [purchaseMessage, setPurchaseMessage] = useState(null);

  const { name, price, image } = laptop;

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleBuy = () => {
    setPurchaseMessage(
      "Thanks for your interest in this laptop! But this product is out of stock currently! Please, come back later!"
    );
  };

  return (
    <div>
      <img src={image} alt={name} className="w-100" />

      <div className="p-3 text-center">
        <p className="fs-2">{name}</p>
        <p className="fs-5">Price: ${price}</p>

        <button onClick={handleBuy} className="fs-5 px-4 btn btn-success">
          BUY THIS LAPTOP
        </button>

        <p className="fs-5 mt-3 text-danger">{purchaseMessage}</p>

        <button onClick={closeModal} className="fs-5 px-4 btn btn-danger">
          CHOOSE AGAIN
        </button>
      </div>
    </div>
  );
}
