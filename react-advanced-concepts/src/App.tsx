import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ReactMemoTest } from "./PURE/ReactMemo";
import { wrappedComponent } from "./HOC/HOCDemo";
import TransitionDemo from "./HOOKS/transitionDemo";
import DeferedValueDemo from "./HOOKS/DeferedValueDemo";
import LayoutEffect from "./HOOKS/LayoutEffect";
import RefDemo from "./REF/RefDemo";

function App() {
  return (
    <>
      {/* <ReactMemoTest /> */}
      {/* {wrappedComponent("testProps")} */}
      {/* <TransitionDemo /> */}
      {/* <DeferedValueDemo /> */}
      {/* <RefDemo /> */}
      <LayoutEffect />
    </>
  );
}

export default App;
