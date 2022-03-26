import { useState } from "react";
import laptopsData from "../../data/laptops.json";
import Cart from "../Cart/Cart";
import Laptop from "../Laptop/Laptop";

export default function Shop() {
  const selectedLaptopsState = useState([]);

  return (
    <div className="m-0 row">
      <div className="m-0 col-8 mw-100 row row-cols-3">
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

      <div className="col-4">
        <Cart selectedLaptopsState={selectedLaptopsState} />
      </div>
    </div>
  );
}
