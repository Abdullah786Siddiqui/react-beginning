import style from "./button.module.css"
let Buttons = ({numbers,onbtnclick}) => {

  
  return(
  <div className={style["button-cont"]}>
    {numbers.map((number) => (
      <button className={style["button"]} onClick={()=>onbtnclick(number)}>{number}</button>
    ))}
  </div>
  )
};
export default Buttons;
