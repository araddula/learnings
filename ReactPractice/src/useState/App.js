import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter+1);
  }
  const decrement = () => {
    setCounter(counter-1);
  }
  const h1Style = {
    paddingLeft: "200px"
  }
  return (
    <div>
      <h2>Use State</h2>
      <h4>Counter</h4>
      <pre>Increment or Decrement Counter</pre>
      <div>
          <h1 style={h1Style}>{counter}</h1>
          <button className="btn" onClick={increment}>Increment</button>
          <button className="btn" onClick={decrement}>Decrement</button>
        </div>
      </div>
  );
}

export default App;
