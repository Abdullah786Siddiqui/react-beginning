import Titel from "./Components/Titel";
import Input from "./Components/Input";
import Element from "./Components/Dynamic";

function App() {
  let products = ["milk", "Sugar", "Appricot", "banana", "Annanas","Orange","Carrot"]
  let dates = ["2/12/24", "2/12/24", "2/12/24", "2/12/24", "6/12/24","6/12/24","6/12/24"];
  return (
    <div className="container text-center  ">
      <Titel />
      <Input />
      <Element products={products} dates={dates} />
     

    </div>
  );
}

export default App;
