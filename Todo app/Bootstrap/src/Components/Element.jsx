import { useContext } from "react";
import { TodoItemContext } from "../Store/TodoitemContext";
import { MdDelete } from "react-icons/md";
function Element() {
  let {todoitem,DeleteItem} = useContext(TodoItemContext);



  return (
    <>
      {todoitem.map((todo) => (
      
       
        <div className="container text-center  " key={todo.name}>
          <div className="row  mb-2">
            <div className="col-6 fw-bolder pt-3">{todo.name}</div>
            <div className="col-4 fw-bolder pt-3">{todo.Date}</div>

            <div className="col-2">
              <button
                className="btn btn-danger fw-bolder fs-5 mt-2 px-4"
                onClick={()=> DeleteItem(todo)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
       
      ))}
   
    </>

  );
}
export default Element;
