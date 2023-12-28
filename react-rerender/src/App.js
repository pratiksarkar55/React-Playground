import React from "react";
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

function App() {
  const [count, setCount] = useState(0);
  const childComp = useCallback(() => {
    return (
      <>
        <Child />
      </>
    );
  }, []);
  return (
    <>
      {/* <UseState /> */}
      {/* <StateImmutable /> */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count in Grand parent is {count}
      </button> */}
      {/* if state is changed here Child will re-render.But if count is setState inside GrandParent then child will not re-render and work as expected. */}
      {/* Why does it fail when passed as render as props */}
      {/* <GrandParent>{childComp}</GrandParent> */}
      {/* 
      <Parent>
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
      {/* <StrangeParent>
        <strong>Hello</strong>
      </StrangeParent> */}
      <IncorrectKeyExample />
    </>
  );
}

class IncorrectKeyExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Apple", "Banana", "Orange", "Peach", "Tomatoes"],
    };
  }

  handleRemoveItem = () => {
    this.setState((prevState) => ({
      items: prevState.items.slice(2), // Remove the first item
    }));
  };

  render() {
    const { items } = this.state;

    // Incorrect usage: Using array index as key
    const listItems = items.map((item, index) => <li key={index}>{item}</li>);

    return (
      <div>
        <ul>{listItems}</ul>
        <button onClick={this.handleRemoveItem}>Remove First Item</button>
      </div>
    );
  }
}

export default App;
