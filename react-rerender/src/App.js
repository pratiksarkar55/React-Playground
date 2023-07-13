import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/UseState";
import StateImmutable from "./components/StateImmutable";
import Parent from "./components/Optimization/Parent";
import Child from "./components/Optimization/Child";
import GrandParent from "./components/Optimization/GrandParent";
import { useState } from "react";
import MemoParent from "./components/Memo/MemoParent";
import StrangeParent from "./components/InCorrectmemo/StrangeParent";
import StrangeChild from "./components/InCorrectmemo/StrangeChild";

function App() {
  return (
    <div>
      {/* <UseState /> */}
      {/* <StateImmutable /> */}

      {/* <GrandParent>
        <Child />
      </GrandParent> */}
      {/* <GrandParent /> */}

      {/* <Parent>
        <Child counter={0} />
      </Parent> */}

      {/* render props */}
      {/* <Parent>
        {() => {
          return (
            <>
              <Child />
            </>
          );
        }}
      </Parent> */}
      {/* <MemoParent /> */}
      <StrangeParent>
        <strong>Hello</strong>
      </StrangeParent>
    </div>
  );
}

export default App;
