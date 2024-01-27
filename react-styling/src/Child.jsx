import React, { useEffect } from "react";

const Child = () => {
  useEffect(() => {
    console.log("inside child useeffect");
  }, []);
  console.log("rendering child");
  return <div>Child</div>;
};

export default Child;
