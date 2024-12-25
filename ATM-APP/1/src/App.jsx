import Input from "./Components/input";
import Deposite from "./Components/Deposite";
import Withdraw from "./Components/Withdraw";
import CheckBalance from "./Components/CheckBalance";
import { useState } from "react";

function App() {
  const [userinput, setUserInput] = useState({
    pin: 1234,
    balance: 0,
  });
  let [inputstate, setinputstate] = useState("");
  const [result, setResult] = useState("");
  let handleInputChange = (e) => {
    setinputstate(e.target.value);
  };
  let handleBtnCHange = () => {
    if (inputstate === "") {
      setResult( "First Enter Your password")
    
      return false;
    }
    if (parseInt(inputstate) === userinput.pin) {
      setResult("Your password is Correct");
      return true;
    } else {
      setResult("Your password is Incorrect");
      return false;
    }
  };

  return (
    <div className="container text-center">
      <Input
        handleInputChange={handleInputChange}
        handleBtnCHange={handleBtnCHange}
        inputstate={inputstate}
      />
      <div className="balance-cont mt-2 me-4">
        <CheckBalance userinput={userinput} handleBtnCHange={handleBtnCHange} setResult={setResult}/>
        <Deposite handleBtnCHange={handleBtnCHange} userinput={userinput} setResult={setResult}  setUserInput={setUserInput}/>
        <Withdraw handleBtnCHange={handleBtnCHange} setUserInput={setUserInput} userinput={userinput}  setResult={setResult} />
        <p className="fw-bolder">{result}</p>
      </div>
    </div>
  );
}

export default App;
