import React from "react";

const StrangeChild = ({ children, name }) => {
  console.log("Rendering child component");
  return (
    <div>
      {children} {name}
    </div>
  );
};

export default React.memo(StrangeChild);
