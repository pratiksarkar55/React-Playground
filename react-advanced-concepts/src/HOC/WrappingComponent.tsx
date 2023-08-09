import React from "react";

const WrappingComponent = (WrappedComponent) => {
  //newComponent is the main function that's get called on App
  const newComponent = (props) => {
    console.log("Props inside wrapper", props);
    return <WrappedComponent name="Pratik" />;
  };

  return newComponent;
};

export default WrappingComponent;
