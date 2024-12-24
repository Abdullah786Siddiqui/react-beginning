import Titel from "./Components/Titel";
import Input from "./Components/input";
import Buttons from "./Components/button";
import Calculator from "./Components/calculator";
import { useState } from "react";

function App() {
  let btnNumber = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const [calVal, setCalVal] = useState("");
  const onbtnclick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newvalitem = calVal + buttonText;
      setCalVal(newvalitem);
    }
  };

  return (
    <center>
      <Calculator>
        <Titel />
        <Input calVal={calVal} />
        <Buttons numbers={btnNumber} onbtnclick={onbtnclick} />
      </Calculator>
    </center>
  );
}

export default App;
