import React, { useEffect, useState } from "react";
import Child from "./Child";

const Parent = ({ children, counter }) => {
  const [count, setCount] = useState(0);
  console.log("Redendering Parent Component");

  // //Passing props to children components
  // const childrenWithProps = React.Children.map(children, (child) => {
  //   // Checking isValidElement is the safe way and avoids a
  //   // typescript error too.
  //   if (React.isValidElement(child)) {
  //     return React.cloneElement(child, { counter: count });
  //   }
  //   return child;
  // });
  const childComp = React.useCallback(() => {
    return children;
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase by 1 In Parent
      </button>
      <div>Count in Parent is {count}</div>
      <div>Count in Parent from Grand Parent is {counter}</div>
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
      {childComp()()}
      {/* for render props */}
      {/* {children()} */}
    </div>
  );
};

export default Parent;
