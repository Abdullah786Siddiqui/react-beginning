import Input from "./Components/input";
import Deposite from "./Components/Deposite";
import Withdraw from "./Components/Withdraw";
import CheckBalance from "./Components/CheckBalance";
import { useState } from "react";
import { ContextItem } from "./Store/Context";
import { useReducer } from "react";


let reducer =(state,action)=>{
  if(action.type === "INPUT_PIN"){
    if(action.payload === ""){
      return{...state,result:"First Enter Your password"}
    }else if(parseInt(action.payload)=== state.pin){
      return{...state,result:"Your password is Correct"}
    }
  }
  return state
 
}
function App() {
   let initialVal = {
    pin: 1234,
      balance: 0,
      result:""
  }
  let [state,dispatch] = useReducer(reducer, initialVal)
  
  let [inputstate, setinputstate] = useState("");
 
  let handleInputChange = (e) => {
    setinputstate(e.target.value);
  };
  let handleBtnCHange = () => {
    dispatch({
      type:"INPUT_PIN",
      payload:inputstate
    })

   
  };

  return (
    <ContextItem.Provider
      value={{
        userinput: state, // Pass state from useReducer
        dispatch, 
        handleInputChange,
        handleBtnCHange,
       
      }}
    >
      <div className="container text-center">
        <Input inputstate={inputstate} />
        <div className="balance-cont mt-2 me-4">
          <CheckBalance />
          <Deposite />
          <Withdraw />
          <p className="fw-bolder">{state.result}</p>
        </div>
      </div>
    </ContextItem.Provider>
  );
}

export default App;
