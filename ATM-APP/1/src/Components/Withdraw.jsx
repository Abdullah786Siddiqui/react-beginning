import { useContext } from "react";
import { ContextItem } from "../Store/Context";

let Withdraw = () => {

let {handleBtnCHange,userinput,setResult,setUserInput}= useContext(ContextItem)
 
     
  let handleWithdraw =()=>{
    if(!handleBtnCHange())return
    let amount = parseFloat(prompt(`Plese Enter Your Deposite Amount`));
    if(amount > userinput.balance){
      setResult( `Your Balance is Insuffuicient`)
    }else{
      setUserInput({
        ...userinput,
        balance: userinput.balance - amount,
      });
      setResult(`$ ${amount} witdraw. &  Your Current Balance is ${userinput.balance - amount}`)
    }
     
  }
    
  return <button className="btn btn-info" onClick={handleWithdraw}>Withdraw</button>;
 
};
export default Withdraw;
