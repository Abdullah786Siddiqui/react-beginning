import Kgbutton from "./button";
import Hello from "./hello";
import Random from './Random.jsx'

function App() {
  let myName = "Abdullah Siddiqui";
  let condition = () => {
    return <p> How are you</p>;
  };
  return (
    <div>
      <h1>
        Welcome to React {myName}
        {condition()}{" "}
      </h1>
      <Kgbutton></Kgbutton>
      <Hello />
      <Random />
      <Random />
      <Random />
      <Random />
    </div>
  );
}
export default App;
