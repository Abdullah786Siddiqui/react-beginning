import Titel from "./Components/Titel";
import Input from "./Components/Input";
import Element from "./Components/Dynamic";
import { useState } from "react";

function App() {
  let products = [
    "milk",
    "Sugar",
    "Appricot",
    "banana",
    "Annanas",
    "Orange",
    "Carrot",
  ];
  let dates = [
    "2/12/24",
    "2/12/24",
    "2/12/24",
    "2/12/24",
    "6/12/24",
    "6/12/24",
    "6/12/24",
  ];

  const [texttoshow, setState] = useState("Abdullah Start typing product");


  const addtask = (e) => {
    setState(e.target.value) 
  };
  return (
    <div className="container text-center  ">
      <Titel />
      <Input addtasks={addtask} />
      <p>{texttoshow}</p>
      <Element products={products} dates={dates} />
    </div>
  );
}

export default App;
