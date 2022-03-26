import laptopsData from "../../data/laptops.json";
import Laptop from "../Laptop/Laptop";

export default function Shop() {
  return (
    <div className="shop m-0 mw-100 row row-cols-3">
      {laptopsData.map((laptop) => {
        return <Laptop key={laptop.name} laptop={laptop} />;
      })}
    </div>
  );
}
