import style from "./button.module.css"
let Buttons = ({numbers}) => {

  
  return(
  <div className={style["button-cont"]}>
    {numbers.map((number) => (
      <button className={style["button"]}>{number}</button>
    ))}
  </div>
  )
};
export default Buttons;
