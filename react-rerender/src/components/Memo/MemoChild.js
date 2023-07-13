import React from "react";

const MemoChild = () => {
  console.log("Redendering Memo Child Component");
  return <div> Memo Child</div>;
};

const MemoizedChild = React.memo(MemoChild, (prevProps, newProps) => {
  console.log(prevProps, newProps);
  return prevProps.count === newProps.count; // Does shallow compare.Need to check for objects and arrays.
});

export default MemoizedChild;
