import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [numb, setNumb] = useState(0);
  const handleIncrement = () => {
    setNumb(numb + 1);
  };
  const handleDecrement = () => {
    setNumb(numb > 0 ? numb - 1 : 0);
  };
  const handelRestart = () => {
    setNumb(0);
  };
  return (
    <div className="App">
      <Counter
        numb={numb}
        increment={handleIncrement}
        decrement={handleDecrement}
        restart={handelRestart}
      />
    </div>
  );
}
export default App;
