import React, { useEffect, useState } from "react";
import StrangeChild from "./StrangeChild";

const StrangeParent = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Roni");
  console.log("Redendering Parent Component");
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
          setName("Roni");
        }}
      >
        Set Name
      </button>
      {/* When we click only increment number button, in this case children(with<strong>) is placed directly in the component.So it will have recursive re-render and so props will change and React.memo fails in child */}
      {/* <StrangeChild name={name}><strong>Hello</strong></StrangeChild> */}
      <StrangeChild name={name}>{children}</StrangeChild>
    </div>
  );
};

export default StrangeParent;
