import React from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  return (
    <ChildComp>
      {(props) => {
        return <div>This is from {props}</div>;
      }}
    </ChildComp>
  );
};

export default ParentComp;
