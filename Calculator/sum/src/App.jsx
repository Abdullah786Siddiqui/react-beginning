import Titel from "./Components/Titel";
import Input from "./Components/input";
import Buttons from "./Components/button";
import Calculator from "./Components/calculator";

function App() {
  let btnNumber = [
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
    "RES",
  ];

  return (
    <center>
      <Calculator>
        <Titel />
        <Input />
        <Buttons numbers={btnNumber} />
      </Calculator>
    </center>
  );
}

export default App;
