import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ReactMemoTest } from "./PURE/ReactMemo";
import { wrappedComponent } from "./HOC/HOCDemo";

function App() {
  return (
    <>
      {/* <ReactMemoTest /> */}
      {wrappedComponent("testProps")}
    </>
  );
}

export default App;
