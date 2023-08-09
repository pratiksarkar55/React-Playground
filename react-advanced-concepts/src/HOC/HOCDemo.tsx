import React from "react";
import WrappingComponent from "./WrappingComponent";

const HOCDemo = (props) => {
  console.log("HOC Demo", props);
  return <div>HOCDemo</div>;
};

export const wrappedComponent = WrappingComponent(HOCDemo);
