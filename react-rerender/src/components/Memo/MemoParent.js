import React, { useState } from "react";
import MemoChild from "./MemoChild";
import MemoizedChild from "./MemoChild";

const MemoParent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  console.log("Redendering Memo Parent Component");
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count in Parent is {count}
      </button>
      <button
        onClick={() => {
          setName("Roni"); // Re-Renders the child component even though there is no chnage in child prop.
        }}
      >
        Set Name
      </button>
      <MemoizedChild count={count} />
    </div>
  );
};

export default MemoParent;
