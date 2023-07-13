import React from "react";

const Child = ({ counter }) => {
  console.log("Rendering child component", counter);
  return <div>Child</div>;
};

export default Child;
