import { useContext } from "react";
import style from "./button.module.css"
import { ContextItem } from "../Store/Context";
let Buttons = () => {
let {btnNumber,onbtnclick} = useContext(ContextItem)
  
  return(
  <div className={style["button-cont"]}>
    {btnNumber.map((number) => (
      <button className={style["button"]} onClick={()=>onbtnclick(number)}>{number}</button>
    ))}
  </div>
  )
};
export default Buttons;
