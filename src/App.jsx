import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 5);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <p> for warm up</p>

      <h2>{count}</h2>

      <button onClick={decrease}>-</button>
      <button onClick={reset} style={{ margin: "0 10px" }}>
        Reset
      </button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;