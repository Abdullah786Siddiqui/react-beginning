import { MdDelete } from "react-icons/md";
let Grid = ({ products,deleteitem }) => {
 
  return (
    <div className="container text-center  ">
      <div className="row  mb-2">
      <div className="col-6 fw-bolder pt-3">{products.name}</div>
      <div className="col-4 fw-bolder pt-3">{products.Date}</div>

        <div className="col-2">
          <button className="btn btn-danger fw-bolder fs-5 mt-2 px-4" onClick={()=>deleteitem(products.name)}><MdDelete /></button>
        </div>
      </div>
    </div>
  );
};
export default Grid;
