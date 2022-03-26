import { Icon } from "@iconify/react";

export default function Cart({ selectedLaptopsState }) {
  const [selectedLaptops, setSelectedLaptops] = selectedLaptopsState;

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

              <button className="btn">
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
    </>
  );
}
