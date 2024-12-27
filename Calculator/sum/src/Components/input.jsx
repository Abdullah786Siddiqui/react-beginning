import { useContext } from "react";
import style from "./input.module.css"
import { ContextItem } from "../Store/Context";

let Input = () => {
 let {calVal} = useContext(ContextItem)
  
  return <input type="text" className={`${style.input} `} value={calVal} readOnly/>;
};
export default Input;
