import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const LayoutEffect = () => {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});
  const sectionRef = useRef<HTMLElement>(null);

  /* 
  useEffect is asynchronous. 
  You see the number change in the DOM before the padding changes. 

  useLayoutEffect is synchronous. 
  You see the number change only after the padding has changed.
  */

  // change to useLayoutEffect to see the difference
  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);

    /* loop is just to make the changes in this example slow enough to be observable */
    for (let i = 0; i <= 999999999; i++) {
      if (i === 999999999) setSectionStyle({ paddingTop: `${random}px` });
    }
  }, [number]);

  return (
    <main className="App">
      <section ref={sectionRef} style={sectionStyle}>
        <div>Number is {number}</div>
        <div>
          <button onClick={() => setNumber((prev) => prev - 1)}>
            Click to decrease
          </button>
          <button onClick={() => setNumber((prev) => prev + 1)}>
            Click to increase
          </button>
        </div>
      </section>
    </main>
  );
};

export default LayoutEffect;
