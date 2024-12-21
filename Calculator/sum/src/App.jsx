import Titel from "./Components/Titel";
import Input from "./Components/input";
import Buttons from "./Components/button"
import style from "./Components/App.module.css"

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
      <div className={style.calculator}>
        <Titel />
        <Input />
       <Buttons numbers={btnNumber}/>
      </div>
    </center>
  );
}

export default App;
