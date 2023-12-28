import React, { useCallback, useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [arr, setArr] = useState([]);
  console.log(arr);
  //   useEffect(() => {
  //     console.log("rendering in useEffect");
  //     const interval = setInterval(() => {
  //       setCounter((counter) => counter + 1);
  //       setArr((arrObj) => [...arrObj, arrObj.length + 1]);
  //     }, 1000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [arr]);
  const handleClick = useCallback(() => {
    setCounter((counter) => counter + 1);
    const arrObj = arr;
    arrObj.push(arr.length + 1);
    setArr(arrObj);
  }, [arr]);
  return (
    <>
      <div>Counter is {counter}</div>
      <Button handleClick={handleClick} />
    </>
  );
};

const Button = React.memo(({ handleClick }) => {
  console.log("rendering child");
  return <button onClick={handleClick}>Click me</button>;
});

export default Counter;
