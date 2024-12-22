function Input({addtasks}){
return(
  <div className="row mb-2">
        <div className="col-6">
          <input type="text" className="input "  onKeyDown={addtasks} placeholder="Enter Your Name" />
        </div>
        <div className="col-4">
          <input type="date"  />
        </div>
        <div className="col-2"><button className="btn btn-success fw-bold">Add</button></div>
      </div>
)
}
export default Input;