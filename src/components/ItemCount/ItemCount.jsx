import { useState } from "react";

let ItemCount = () => {
  const [count, setCount] = useState(0);

  const decreaseCounter = () => {
    setCount(count - 1);
    console.log("Handle Contador: ", count);
  };

  const increaseCounter = () => {
    setCount(count + 1);
    console.log("Handle Contador: ", count);
  };

  return (
    <>
      <button onClick={decreaseCounter}>-</button>
      <button>{count}</button>
      <button onClick={increaseCounter}>+</button>
    </>
  );
};

export default ItemCount;
