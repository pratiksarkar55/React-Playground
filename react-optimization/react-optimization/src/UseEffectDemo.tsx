import React, { useCallback, useEffect, useMemo, useState } from "react";

export const GoodTimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 0.1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{count.toFixed(1)}</div>;
};

/** The component in strict mode is called up twice(remounted) for checking resillience
 * So two timer instances are created which makes the count double.
 * Need to make clean up function.
 * **/
export const BadTimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 0.1);
    }, 1000);
  }, []);
  return <div>{count.toFixed(1)}</div>;
};

/** Here count is zero and since useEffect runs only once the
     count value is updated only once.So we get 1 as render.
     * Need to make setCount(prev=>prev+1)
*/
export const ConstantTimer = () => {
  const [count, setCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCorrectCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {count} && {correctCount}
    </div>
  );
};

export const UseCallbackAndMemoTest = () => {
  const [counter, setCounter] = useState(0);

  const handler = useCallback(() => {
    console.log("Inside handler function");
    //  setCounter(counter + 1); // This will always have counter as 0 due to closure with the initial load.
    setCounter((prev) => prev + 1); // This will work as expected.
    //Keeping both will always give answer as 2.
  }, []);

  const summation = () => {
    let sum = 0;
    for (let i = 0; i < counter; i++) {
      sum = sum + i;
    }
    return sum;
  };

  let total = 0;

  useMemo(() => {
    total = summation();
  }, []); // This will cause always to have counter as 0;

  return (
    <div>
      <div>
        {" "}
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Click Me Parent
        </button>
      </div>
      <MemoizedChild handler={handler} sum={total} />
      Count is {counter}
    </div>
  );
};

const UseCallbackTestChild = ({ handler, sum }) => {
  console.log("Inside Child Component");
  return (
    <div>
      <br />
      <button
        onClick={() => {
          handler();
        }}
      >
        Click Me Child
      </button>
      <div>sum is {sum}</div>
    </div>
  );
};
const MemoizedChild = React.memo(UseCallbackTestChild);
