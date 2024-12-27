import { useReducer } from "react";

function App() {
  let initialVal = 0;
  let reducer =(state,action)=>{
   if(action === 'increment' ){
     return state + 1;
   }else if(action === 'decrement'){
   return state > 0 ? state - 1 : state;
   }else if(action === 'Reset'){
    return  initialVal;
   }else{
    return state;
   }

  }
 let [count,dispatch]= useReducer(reducer, initialVal);
 return(
  <div className="btn-cont">
    <button className="btn btn-primary" onClick={()=> dispatch('increment')} >Increment</button>
    <button className="btn btn-danger" onClick={()=> dispatch('decrement')} >Decrement</button>
    <button className="btn btn-info" onClick={()=> dispatch('Reset')} >Reset</button>
    <p>Count is{count}</p>
    </div>

 )

}

export default App;
