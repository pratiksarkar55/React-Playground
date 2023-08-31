import React from "react";

const Child = ({ counter }) => {
  console.log("Rendering child component", counter);
  return <div>Count in child is {counter}</div>;
};

export default Child;
