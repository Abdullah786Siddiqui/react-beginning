import { useState } from "react";
import Item from "./items";

const Fooditems = ({ fooditems }) => {
  let [activeitems, setactiveitem] = useState([]);
  let onBuyBtn = (food) => {
    if (activeitems.includes(food)) {
      let updatedItems = activeitems.filter((item) => item !== food);
      setactiveitem(updatedItems);
    } else {
      let newitems = [...activeitems, food];

      setactiveitem(newitems);
    }
  };

  return (
  <>
    <ul className="list-group">
      {fooditems.map((food) => (
        <Item
          key={food}
          fooditems={food}
          brough={activeitems.includes(food)}
          handlebuybtn={() => onBuyBtn(food)}
        />
      ))}
    </ul>
  <p>{activeitems}</p>
  </>
  );
};
export default Fooditems;
