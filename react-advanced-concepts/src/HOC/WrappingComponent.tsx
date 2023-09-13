import React from "react";

const wrappingComponent = (
  WrappedComponent: (props: { name: string; age?: number }) => JSX.Element,
  val1: string
) => {
  console.log("Inside wrapping component", val1);
  const newComponent = (props: string) => {
    console.log("Props inside wrapper", props);
    return <WrappedComponent name="Pratik" />;
  };

  return newComponent;
};

export default wrappingComponent;
