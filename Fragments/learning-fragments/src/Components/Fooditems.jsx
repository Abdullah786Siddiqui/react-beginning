import Item from "./items";
import Style from "./Fooditems.module.css"; 

const Fooditems = ({ fooditems }) => {
  return (
    <ul className={Style["unorder"]}>
      {fooditems.map((food) => (
        <Item key={food} fooditems={food} />
      ))}
    </ul>
  );
};
export default Fooditems;
