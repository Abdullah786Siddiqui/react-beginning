import Titel from "./Components/Titel";
import Input from "./Components/Input";
import Element from "./Components/Dynamic";
import { useState } from "react";

function App() {
  let [todoitem, settodoitems] = useState([]);

  let handletodoitem = (item, date) => {
    if (!item || !date) {
      alert("plese Enter the task");
    } else {
      let newitem = [...todoitem, { name: item, Date: date }];
      settodoitems(newitem);
    }
  };
  let handleItemDelete = (todoitemName) => {
    console.log(`Delete item ${todoitemName}`);
    let newtodoitem = todoitem.filter((item) => item.name !== todoitemName);
    settodoitems(newtodoitem);
  };

  return (
    <div className="container text-center  ">
      <Titel />
      <Input newitemadd={handletodoitem} />
      {todoitem.length === 0 && (
        <p className="fw-bold fs-4 text-success text">
          WELCOME ALL YOUR TASK HAVE DONE PLESE ADD MORE TASK...
        </p>
      )}
      <Element todoitem={todoitem} deleteitem={handleItemDelete} />
    </div>
  );
}

export default App;
