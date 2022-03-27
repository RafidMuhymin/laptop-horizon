import { useState } from "react";
import laptopsData from "../../data/laptops";
import Cart from "../Cart/Cart";
import Laptop from "../Laptop/Laptop";
import "./Shop.css";

export default function Shop() {
  const selectedLaptopsState = useState([]);

  return (
    <div className="m-0 row flex-column flex-xl-row">
      <div className="m-0 py-3 col-12 col-xl-8 mw-100 row row-cols-1 row-cols-md-2 row-cols-xl-3">
        {laptopsData.map((laptop) => {
          return (
            <Laptop
              key={laptop.name}
              laptop={laptop}
              selectedLaptopsState={selectedLaptopsState}
            />
          );
        })}
      </div>

      <div className="cart col-12 col-xl-4 p-3 rounded-3">
        <Cart selectedLaptopsState={selectedLaptopsState} />
      </div>
    </div>
  );
}
