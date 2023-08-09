import React, { useCallback, useState } from "react";

export const ReactMemoTest = () => {
  const [counter1, setCounter1] = useState({
    counter1: 0,
  });
  const [counter2, setCounter2] = useState({
    counter2: 0,
  });

  const handler1 = useCallback(() => {
    setCounter1({ counter1: counter1.counter1 + 1 });
    // counter2.counter on first click of handle1 after multiple clicks on handle2  has value zero due to closure with useCallback
    setCounter2({ counter2: counter2.counter2 }); // will not render MemoizedButton2 as handler2 has primitive value has dependecy array.
    // so we can use it like this
    // setCounter2((prev) => {
    //   return { counter2: prev.counter2 };
    // });
  }, [counter1]);

  const handler2 = useCallback(() => {
    setCounter2({ counter2: counter2.counter2 + 1 });
    // counter1.counter on first click of handle2 after multiple clicks on handle1  has value zero due to closure with useCallback
    setCounter1({ counter1: counter1.counter1 }); // will render MemoizedButton1 always as new object referemce is created and handler1 has object as dependency array
  }, [counter2.counter2]);

  return (
    <div>
      <MemoizedButton1 handler1={handler1} value={counter1.counter1} />
      <MemoizedButton2 handler2={handler2} value={counter2.counter2} />
    </div>
  );
};

const Button1 = (props: { handler1: () => void; value: number }) => {
  console.log("rendering button 1");

  return (
    <React.Fragment>
      <div>{props.value}</div>
      <button onClick={props.handler1}>Button 1</button>
    </React.Fragment>
  );
};

const MemoizedButton1 = React.memo(Button1, (prevProps, nextProps) => {
  console.log("prevProps", prevProps);
  console.log("nextProps", nextProps);
  return prevProps.value === nextProps.value;
});

const Button2 = (props: { handler2: () => void; value: number }) => {
  console.log("rendering button 2");
  return (
    <>
      <div>{props.value}</div>
      <button onClick={props.handler2}>Button 2</button>
    </>
  );
};

const MemoizedButton2 = React.memo(Button2);
