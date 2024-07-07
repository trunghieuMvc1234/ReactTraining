import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [inCrementBy, setIncrementBy] = useState(1);
  function increment() {
    setCount(count + inCrementBy);
  }
  function deCrement() {
    setCount(count - inCrementBy);
  }
  function increaseIncrement() {
    setIncrementBy(inCrementBy + 1);
  }
  function decreaseIncrement() {
    setIncrementBy(inCrementBy - 1);
  }
  return (
    <div>
      <h2>lession 23 - State In React</h2>
      <h2>Count value is: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={deCrement}>Increment</button>
      <h2>lession 24 - Creating Multiple States In React</h2>
      <h2>we are incrementing value by: {inCrementBy}</h2>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decreaseIncrement}>Decrease Increment</button>
    </div>
  );
}
