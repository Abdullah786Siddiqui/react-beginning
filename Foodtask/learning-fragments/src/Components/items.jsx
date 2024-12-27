import Style from "./Fooditems.module.css";
const Item = ({ fooditems, brough, handlebuybtn }) => {
  

  return (
    <>
      <li className={`list-group-item fs-4 mb-3 ${brough && "active"} `}>
        {fooditems}
        <button
          className={` btn btn-primary fw-bold float-end ${
            brough && Style.button1
          } `}
          onClick={handlebuybtn}
        >
          {brough ? "Remove" : "Buy"}
        </button>
      </li>
    </>
  );
};
export default Item;
