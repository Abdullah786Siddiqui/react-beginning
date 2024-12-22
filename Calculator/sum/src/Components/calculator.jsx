import style from "./App.module.css"
let Calculator = (props) => {
  return  <div className={style.calculator}>{props.children}</div>
};
export default Calculator;
