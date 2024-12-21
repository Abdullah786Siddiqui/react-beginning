import Fooditems from "./Components/Fooditems";
import Errormsg from "./Components/Errormsg";
import Style from "./Components/Fooditems.module.css";

function App() {
  let foods = ["Liche", "Apple", "Annnanas", "Bnanana", "Appricot"];

  return (
    <div className="container-fluid">
      <h1 className={Style["heading"]}>Healthy Food</h1>
      <Errormsg fooditems={foods} />
      <Fooditems fooditems={foods} />
    </div>
  );
}

export default App;
