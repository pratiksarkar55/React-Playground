import React, { useState } from "react";

//Testing with objects.BAILOUT DOESN'T HAPPEN.
// const UseState = () => {
//   const [count, setCount] = useState({ counter: 0 });
//   console.log("Redendering UseState Component", count);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           // let testCount = { counter: count.counter + 1 };
//           //setCount({ ...count.counter, ...testCount });
//           setCount({ counter: count.counter + 1 });
//         }}
//       >
//         Count is {count.counter}
//       </button>
//       <button
//         onClick={() => {
//           //   let testCounter = { counter: 0 };
//           //   setCount({ ...count.counter, ...testCounter });
//           setCount({ counter: 0 });
//         }}
//       >
//         Set to 0
//       </button>
//       <button
//         onClick={() => {
//           //   let testCounter = { counter: 5 };
//           //   setCount({ ...count.counter, ...testCounter });
//           setCount({ counter: 5 });
//         }}
//       >
//         Set to 5
//       </button>
//     </div>
//   );
// };

//Testing with primitives.BAILOUT HAPPENS
const UseState = () => {
  const [count, setCount] = useState(0);
  console.log("Redendering UseState Component", count);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count is {count}
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Set to 0
      </button>
      <button
        onClick={() => {
          setCount(5);
        }}
      >
        Set to 5
      </button>
    </div>
  );
};

export default UseState;
