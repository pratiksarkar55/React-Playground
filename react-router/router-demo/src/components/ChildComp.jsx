import React from "react";

const ChildComp = ({ children }) => {
  return <div>{children("child component")}</div>;
};

export default ChildComp;
