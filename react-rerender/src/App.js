import React, { useEffect, Suspense, useLayoutEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/UseState";
import StateImmutable from "./components/StateImmutable";
import Parent from "./components/Optimization/Parent";
import Child from "./components/Optimization/Child";
import GrandParent from "./components/Optimization/GrandParent";
import { useCallback, useState } from "react";
import MemoParent from "./components/Memo/MemoParent";
import StrangeParent from "./components/InCorrectmemo/StrangeParent";
import StrangeChild from "./components/InCorrectmemo/StrangeChild";

// function App() {
//   const [count, setCount] = useState(0);
//   const childComp = useCallback(() => {
//     return (
//       <>
//         <Child />
//       </>
//     );
//   }, []);
//   return (
//     <>
//       {/* <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
//         <circle
//           cx="100"
//           cy="100"
//           r="80"
//           stroke="black"
//           strokeWidth="3"
//           fill="red"
//         />
//       </svg> */}
//       {/* <UseState /> */}
//       {/* <StateImmutable /> */}
//       {/* <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Count in Grand parent is {count}
//       </button> */}
//       {/* if state is changed here Child will re-render.But if count is setState inside GrandParent then child will not re-render and work as expected. */}
//       {/* Why does it fail when passed as render as props */}
//       {/* <GrandParent>{childComp}</GrandParent> */}
//       {/*
//       <Parent>
//         <Child counter={0} />
//       </Parent> */}
//       {/* render props */}
//       {/* <Parent>
//         {() => {
//           return (
//             <>
//               <Child />
//             </>
//           );
//         }}
//       </Parent> */}
//       {/* <MemoParent /> */}
//       {/* <StrangeParent>
//         <strong>Hello</strong>
//       </StrangeParent> */}
//       {/* <IncorrectKeyExample /> */}
//     </>
//   );
// }

// class IncorrectKeyExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: ["Apple", "Banana", "Orange", "Peach", "Tomatoes"],
//     };
//   }

//   handleRemoveItem = () => {
//     this.setState((prevState) => ({
//       items: prevState.items.slice(2), // Remove the first item
//     }));
//   };

//   render() {
//     const { items } = this.state;

//     // Incorrect usage: Using array index as key
//     const listItems = items.map((item, index) => <li key={index}>{item}</li>);

//     return (
//       <div>
//         <ul>{listItems}</ul>
//         <button onClick={this.handleRemoveItem}>Remove First Item</button>
//       </div>
//     );
//   }
// }

function useHover() {
  const ref = React.useRef(null);
  const [isHovered, setHovered] = useState(false);
  useEffect(() => {
    let current = ref.current;
    console.log("INISDE USE EFFECT");
    if (ref.current) {
      ref.current.addEventListener("mouseover", () => {
        setHovered(true);
      });
      ref.current.addEventListener("mouseout", () => {
        setHovered(false);
      });
    }
    return () => {
      current.removeEventListener("mouseover", () => {
        setHovered(true);
      });
      current.removeEventListener("mouseout", () => {
        setHovered(false);
      });
    };
  }, [ref]);
  return [ref, isHovered];
}

function App() {
  const [ref, isHovered] = useHover();
  return (
    <div style={{ border: "1px solid black" }} ref={ref}>
      {isHovered ? "hovered" : "not hovered"}
    </div>
  );
}

export default App;
