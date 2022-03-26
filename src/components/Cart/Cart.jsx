import { Icon } from "@iconify/react";
import { useState } from "react";
import Modal from "../Modals/Modal";
import PurchaseMessage from "../Modals/PurchaseMessage/PurchaseMessage";

export default function Cart({ selectedLaptopsState }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(null);
  const [randomSelectionErrorMessage, setRandomSelectionErrorMessage] =
    useState(null);

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
    if (selectedLaptops.length < 1) {
      setRandomSelectionErrorMessage(
        <p className="text-center text-danger fs-5">
          Add some laptops to your cart first!
        </p>
      );

      setTimeout(() => {
        setRandomSelectionErrorMessage(null);
      }, 1500);
    } else {
      setRandomSelectionErrorMessage(null);

      const randomLaptop =
        selectedLaptops[Math.floor(Math.random() * selectedLaptops.length)];

      setModalMessage(
        <PurchaseMessage
          laptop={randomLaptop}
          setModalIsOpen={setModalIsOpen}
        />
      );

      setModalIsOpen(true);
    }
  };

  return (
    <>
      <h2 className="text-center">Cart</h2>

      {selectedLaptops.length < 1 && (
        <p className="mt-2 fs-4 text-center">No laptops have been selected!</p>
      )}

      {selectedLaptops.length > 0 && (
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
      )}

      <button
        onClick={handleRandomSelection}
        className="m-3 btn btn-success w-50 d-block mx-auto"
      >
        CHOOSE ONE FOR ME
      </button>

      {randomSelectionErrorMessage}

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
        {modalMessage}
      </Modal>
    </>
  );
}
