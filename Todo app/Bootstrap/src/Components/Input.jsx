import { RiAddLargeFill } from "react-icons/ri";
import { useContext } from "react";
import { TodoItemContext } from "../Store/TodoitemContext";


import { useState } from "react";

function Input() {
  let [todoitem, settodoitem] = useState("");
  let [duedate, setduedate] = useState("");
  let {AddNewItem} = useContext(TodoItemContext);
  

  let handlietodoitem = (e) => {
    settodoitem(e.target.value);
  };
  let handleduedate = (e) => {
    setduedate(e.target.value);
  };

  let handleaddbtn =()=>{
    AddNewItem(todoitem,duedate)
    settodoitem("")
    setduedate("")

  }

  return (
    <div className="row mb-2">
      <div className="col-6">
        <input
          type="text"
          className="input "
          onChange={handlietodoitem}
          placeholder="Enter Your Name"
          value={todoitem}
        />
      </div>
      <div className="col-4">
        <input type="date" onChange={handleduedate} />
      </div>
      <div className="col-2">
        <button
          className="btn btn-success  fw-bolder fs-6 px-4"
          onClick={handleaddbtn}
          value={duedate}

        >
         <RiAddLargeFill />
        </button>
      </div>
    </div>
  );
}
export default Input;
