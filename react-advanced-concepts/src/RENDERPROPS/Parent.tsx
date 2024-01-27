import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      Parent
      <Child>
        {(props) => {
          return <div>This is rendering {props}</div>;
        }}
      </Child>
    </div>
  );
};

export default Parent;
