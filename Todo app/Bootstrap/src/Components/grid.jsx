let Grid = ({ products,dates }) => {
 
  return (
    <div className="container text-center  ">
      <div className="row  mb-2">
        <div className="col-6 ">{products}</div>
        <div className="col-4 ">{dates}</div>

        <div className="col-2">
          <button className="btn btn-danger fw-bold mt-2">Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Grid;
