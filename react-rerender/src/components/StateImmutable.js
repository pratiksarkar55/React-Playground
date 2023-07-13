import React, { useState } from "react";

const StateImmutable = () => {
  const [count, setCount] = useState({ counter: 0 });
  console.log("Redendering UseState Component", count);
  return (
    <div>
      <button
        onClick={() => {
          count.counter++;
          //Won't re-render as the state REFERS to the same object even if value is changed.
          setCount(count);
        }}
      >
        Count is {count.counter}
      </button>
    </div>
  );
};

export default StateImmutable;
