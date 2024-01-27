import React, { useState } from "react";
import "./styles/App.scss";
import Child from "./Child";
// import "./styles/Custom.scss"; the one below will override the styles.
function App() {
  React.useEffect(() => {
    console.log("inside App useeffect");
  }, []);
  console.log("rendering app");
  return (
    <>
      <Child />
    </>
  );
}

export default App;
