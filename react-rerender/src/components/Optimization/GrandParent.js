import React, { useCallback, useState } from "react";
import Parent from "./Parent";
import Child from "./Child";
let child = null;
const GrandParent = ({ children }) => {
  console.log(child === children);
  child = children;
  const [count, setCount] = useState(0);
  const childComp = useCallback(() => {
    return children;
  }, []);
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
      <Parent counter={count}>{childComp()}</Parent>
    </div>
  );
};

export default GrandParent;
