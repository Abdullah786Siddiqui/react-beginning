import { createContext } from "react";
import { useReducer } from "react";
// Create a context
export const TodoItemContext = createContext({
  todoitem: [],
  AddNewItem:()=>{},
  DeleteItem:()=>{}
});
let TodoitemReducer = (state, action) => {
  let Addnewtodo = state;
 
  

  if (action.type === "ADD_NEW") {
    Addnewtodo = [
      ...state,
      { name: action.payload.item, Date: action.payload.date },
    ];
  }else if(action.type === "DELETE_ITEM"){
    Addnewtodo = Addnewtodo.filter((items) => items.name !== action.payload.item.name);
    
    
  }
   
  

  return Addnewtodo;
};

let TodoItemContextProvider =({children})=>{

  let [todoitem, dispatchtodoitem] = useReducer(TodoitemReducer, []);

  let AddNewItem = (item, date) => {
    if (!item || !date) {
       alert("plese Enter the task");
    } else {
      let addItenobj = {
        type: "ADD_NEW",
        payload: {
          item,
          date,
        },
      };
      dispatchtodoitem(addItenobj);
    }
  }
  
  let DeleteItem = (todoname) => {
   
    let DeleteItemobj = {
      type:"DELETE_ITEM",
      payload: {
      item:todoname,
      
      },
    };
    dispatchtodoitem(DeleteItemobj);
  }
  return  <TodoItemContext.Provider
  value={{
    todoitem,
    AddNewItem,
    DeleteItem,
  }}
>
  {children}
</TodoItemContext.Provider>
}
export default TodoItemContextProvider