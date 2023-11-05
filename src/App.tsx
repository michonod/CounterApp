import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const counterHandler = (type: "increment" | "decrement" | "reset") => {
    if (type === "reset") {
      setCounter(0);
      return;
    }
    setCounter((prevCounter) =>
      type === "increment"
        ? prevCounter + 1
        : prevCounter === 0
        ? 0
        : prevCounter - 1
    );
  };

  return (
    <>
      <div className="counterContainer">
        <h1>Counter App</h1>
        <button
          className="button"
          onClick={() => counterHandler("increment")}
          data-testid="increment"
        >
          +
        </button>
        <h2 className="count" data-testid="count">
          Count: {counter}
        </h2>
        <button
          className="button"
          onClick={() => counterHandler("decrement")}
          data-testid="decrement"
        >
          -
        </button>
        <button
          className="button resetButton"
          onClick={() => counterHandler("reset")}
          data-testid="reset"
        >
          Reset counter
        </button>
      </div>
    </>
  );
}

export default App;
