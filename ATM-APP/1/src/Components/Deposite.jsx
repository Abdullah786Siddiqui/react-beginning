let Deposite = ({handleBtnCHange ,userinput,setResult,setUserInput}) => {
  let handleDepositeBtn=()=>{
    if(!handleBtnCHange()) return
      let amount = parseFloat(prompt(`Plese Enter Your Deposite Amount`));
      setUserInput({
        ...userinput,
        balance: userinput.balance + amount,
      });
      setResult(`$ ${amount} Deposite. & Your Current Balance is $${userinput.balance + amount}`)
    

  }

  return <button className="btn btn-success  me-2" onClick={handleDepositeBtn}>Deposite</button>;
};
export default Deposite;
