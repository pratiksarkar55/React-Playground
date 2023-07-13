import React, { useEffect, useState } from "react";
import Child from "./Child";

const Parent = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("Redendering Parent Component");

  //Passing props to children components
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { counter: count });
    }
    return child;
  });
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
          setCount(0);
        }}
      >
        Set to 0
      </button>
      <button
        onClick={() => {
          setCount(5);
        }}
      >
        Set to 5
      </button>
      {children}
      {/* for render props */}
      {/* {children()} */}
    </div>
  );
};

export default Parent;
