import { Icon } from "@iconify/react";
import { useState } from "react";
import Modal from "../Modals/Modal";

export default function Laptop({ laptop, selectedLaptopsState }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(null);

  const { name, price, image } = laptop;

  const [selectedLaptops, setSelectedLaptops] = selectedLaptopsState;

  function closeModal() {
    setModalIsOpen(false);
  }

  const handleAddToCart = () => {
    if (selectedLaptops.includes(laptop)) {
      setModalMessage(
        <p className="text-danger fs-5">
          You have already selected this laptop!
        </p>
      );

      setModalIsOpen(true);
    } else if (selectedLaptops.length === 4) {
      setModalMessage(
        <p className="text-center text-danger fs-5">
          Can't select more than 4 laptops!
        </p>
      );

      setModalIsOpen(true);
    } else {
      setSelectedLaptops([...selectedLaptops, laptop]);
    }
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        {modalMessage && (
          <div className="text-center">
            <Icon
              icon="clarity:error-standard-solid"
              style={{
                color: "red",
                width: "4rem",
                height: "4rem",
                display: "block",
                margin: "0 auto 1rem auto",
              }}
            />

            <p className="fs-1 text-danger">Oops...</p>

            {modalMessage}

            <button
              onClick={closeModal}
              className="fs-5 btn btn-secondary px-3"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}
