import { useContext } from "react";
import { TodoItemContext } from "../Store/TodoitemContext";


let Messesge = () => {

  let ContextObj = useContext(TodoItemContext)
  let todoitem = ContextObj.todoitem

  
  return  todoitem.length === 0 &&  <p className="fw-bold fs-4 text-success text">
  WELCOME ALL YOUR TASK HAVE DONE PLESE ADD MORE TASK...
</p>
};
export default Messesge;
