import Titel from "./Components/Titel";
import Input from "./Components/Input";
import Element from "./Components/Element";

import Messesge from "./Components/messege";
import TodoItemContextProvider from "./Store/TodoitemContext";

function App() {
  return (
    <TodoItemContextProvider>
      <div className="container text-center  ">
        <Titel />
        <Input />
        <Messesge />
        <Element />
      </div>
    </TodoItemContextProvider>
  );
}

export default App;
