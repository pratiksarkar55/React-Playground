import React from "react";

const Child = ({ children: any }) => {
  return <div>{children("child")}</div>;
};

export default Child;
