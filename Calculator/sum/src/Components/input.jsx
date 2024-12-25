import style from "./input.module.css"

let Input = ({calVal}) => {
 
  
  return <input type="text" className={`${style.input} `} value={calVal} readOnly/>;
};
export default Input;
