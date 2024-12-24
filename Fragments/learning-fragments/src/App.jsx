import Fooditems from "./Components/Fooditems";
import Errormsg from "./Components/Errormsg";
import Style from "./Components/Fooditems.module.css";
import Container from "./Components/container";
import Input from "./Components/input";
import { useState } from "react";

function App() {
  let [foods, setfoods] = useState(["Apple", "Banana", "Appricot","Annanas"]);

  let handleinput = (e) => {
    console.log(e);
    
    if (e.key === "Enter") {
      let item = e.target.value;
      let newitems = [...foods, item];
      console.log(newitems)
      setfoods(newitems);
    }
  };
  
  
  return (
    <Container>
      <h1 className={Style["heading"]}>Healthy Food</h1>
      <Input handleinput={handleinput} />
      <Errormsg fooditems={foods} />
      <Fooditems fooditems={foods} />
    </Container>

    /* <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit
          architecto quaerat sunt, quis illum molestias minus impedit quas
          molestiae at vel. Consequatur tenetur, ullam eum est eveniet unde
          eius.
        </p>
      </Container> */
  );
}

export default App;
