
import style from "./input.module.css";

let Input = ({ handleInputChange ,handleBtnCHange ,inputstate }) => {
 

  return (
    <>
      <h3>REACT ATM APP</h3>
      <label className={`fw-bolder pe-2 input ${style.input}`}>
        Enter Your Key
      </label>
      <input type="text" value={inputstate} onChange={handleInputChange} />
      <div className="button-cont">
        <button className="btn btn-success mt-2" onClick={handleBtnCHange}>
          Enter
        </button>
      </div>
    </>
  );
};
export default Input;
