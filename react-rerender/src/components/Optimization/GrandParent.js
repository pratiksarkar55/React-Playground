import React, { useState } from "react";
import Parent from "./Parent";
import Child from "./Child";

const GrandParent = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("Redendering Grand Parent Component");
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count in Grand parent is {count}
      </button>
      <Parent count={count}>{children}</Parent>
    </div>
  );
};

export default GrandParent;
