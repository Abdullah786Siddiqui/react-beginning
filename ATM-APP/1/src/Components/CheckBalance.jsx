let CheckBalance = ({userinput ,handleBtnCHange,setResult}) => {

 
  
  let HandleCheckBtn = ()=>{
    if(handleBtnCHange()){
      setResult(`Your  Balance is $${userinput.balance}`);
    }
    
 
   
  }
  
  return <button className="btn btn-danger me-2"onClick={HandleCheckBtn} >Check Balance</button>;
};
export default CheckBalance;
