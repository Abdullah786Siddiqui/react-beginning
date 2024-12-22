import Style from "./Fooditems.module.css";
const Item = ({ fooditems }) => {
  return (
    <>
      <li className="list-group-item fs-4 mb-3">
        {fooditems}
        <button className={`${Style.button} btn btn-primary `}>buy</button>
      </li>
    </>
  );
};
export default Item;
