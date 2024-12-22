import Item from "./items";

const Fooditems = ({ fooditems }) => {
  return (
    <ul className="list-group">
      {fooditems.map((food) => (
        <Item key={food} fooditems={food} />
      ))}
    </ul>
  );
};
export default Fooditems;
