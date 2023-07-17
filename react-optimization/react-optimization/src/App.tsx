import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BadTimer,
  ConstantTimer,
  GoodTimer,
  UseCallbackAndMemoTest,
} from "./UseEffectDemo";
import UseEffectDemoTwo from "./UseEffectDemoTwo";

/**DONT USE COMPONENTS AS FUNCTIONS IN JSX WHILE RENDERING
 * LIKE {Child()}.No always use <Child/>
 * Using as function it will render but merge the child into parent as one component.
 * So any change in Child will also render parent
 *  **/
function App() {
  const [index, setIndex] = useState(0);

  return (
    <>
      {/* <GoodTimer />
      <BadTimer /> */}
      {/* <ConstantTimer /> */}
      {/* <UseCallbackAndMemoTest /> */}
      <UseEffectDemoTwo key={index} />
      <div>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          Click to set index
        </button>
      </div>
    </>
  );
}

export default App;
