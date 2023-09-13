import React from "react";
import wrappingComponent from "./WrappingComponent";
//HOC-is a function which returns a function which in turn returns a component.
const HOCDemo = (props: { name: string; age?: number }) => {
  console.log("HOC Demo", props);
  return <div>HOCDemo</div>;
};

export const wrappedComponent = wrappingComponent(HOCDemo, "test");
