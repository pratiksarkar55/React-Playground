import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      ></button>
      <div>Count is {counter}</div>
    </>
  );
};

export default Counter;
