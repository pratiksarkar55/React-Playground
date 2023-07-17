import React, { useEffect, useRef, useState } from "react";

const UseEffectDemoTwo = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const refObj = useRef<HTMLDivElement>(null);

  //This solution is useful if we have fetch requests in unmounted components - VERY IMPORTANT
  //   useEffect(() => {
  //     let isMounted = true;
  //     setInterval(() => {
  //       console.log("is mounted in Setinterval", isMounted);
  //       if (isMounted) {
  //         setCount((prev) => prev + 1);
  //       }
  //     }, 1000);
  //     return () => {
  //       isMounted = false;
  //       console.log("isMounted in cleanup", isMounted);
  //     };
  //   }, []);

  // This is the ideal solution
  useEffect(() => {
    const clearIntervalVal = setInterval(() => {
      console.log("is mounted in Setinterval");
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(clearIntervalVal);
      console.log("isMounted in cleanup");
    };
  }, []);

  // This can cause issue when the compoent remounts when props is changed as during clean up refObj has new ref properties.So we use closure.
  //   useEffect(() => {
  //     refObj?.current?.addEventListener("mouseover", () => setShow(true));
  //     refObj?.current?.addEventListener("mouseout", () => setShow(false));
  //     return () => {
  //       refObj?.current?.removeEventListener("mouseover", () => {});
  //       refObj?.current?.removeEventListener("mouseout", () => {});
  //     };
  //   }, []);

  useEffect(() => {
    refObj?.current?.addEventListener("mouseover", () => setShow(true));
    refObj?.current?.addEventListener("mouseout", () => setShow(false));
    let ref = refObj?.current;
    return () => {
      ref?.removeEventListener("mouseover", () => {});
      ref?.removeEventListener("mouseout", () => {});
    };
  }, []);

  return (
    <div>
      <div>Counter is {count}</div>
      <div ref={refObj}>
        <div>Hover here</div>
        {show && <div>Showing Pop up</div>}
      </div>
    </div>
  );
};

export default UseEffectDemoTwo;
