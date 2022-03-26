import { Icon } from "@iconify/react";
import { useState } from "react";
import Modal from "../Modal/Modal";

function ModalMessage({ laptop, setModalIsOpen }) {
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

export default function Cart({ selectedLaptopsState }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);

  const [selectedLaptops, setSelectedLaptops] = selectedLaptopsState;

  const handleClearCart = () => {
    setSelectedLaptops([]);
  };

  const handleRemoveFromCart = (name) => {
    setSelectedLaptops(
      selectedLaptops.filter((laptop) => laptop.name !== name)
    );
  };

  const handleRandomSelection = () => {
    const randomLaptop =
      selectedLaptops[Math.floor(Math.random() * selectedLaptops.length)];

    setModalChildren(
      <ModalMessage laptop={randomLaptop} setModalIsOpen={setModalIsOpen} />
    );

    setModalIsOpen(true);
  };

  return (
    <>
      <h1 className="text-center">Cart</h1>
      <div className="d-flex flex-column gap-3 p-3">
        {selectedLaptops.map(({ name, image }) => {
          return (
            <div
              key={name}
              className="text-center mw-100 d-flex gap-1 align-items-center justify-content-between"
            >
              <img
                src={image}
                alt={name}
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                }}
              />

              <p className="m-0 fs-5">{name}</p>

              <button
                className="btn"
                onClick={() => handleRemoveFromCart(name)}
              >
                <Icon
                  icon="ant-design:delete-filled"
                  style={{
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleRandomSelection}
        className="m-3 btn btn-success w-50 d-block mx-auto"
      >
        CHOOSE ONE FOR ME
      </button>
      <button
        onClick={handleClearCart}
        className="m-3 btn btn-danger w-50 d-block mx-auto"
      >
        CHOOSE AGAIN
      </button>

      <Modal
        style={{ content: { inset: "25%" } }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        {modalChildren}
      </Modal>
    </>
  );
}
