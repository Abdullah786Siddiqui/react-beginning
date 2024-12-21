import Style from "./Fooditems.module.css"; 
const errormsg = ({ fooditems }) => {
  return (
    <>{fooditems.length === 0 ? <h1 className={Style["error"]}>Your Food Items Has Empty</h1> : null}</>
  );
};
export default errormsg;
