import React, { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

/**
 * react-error-boundary or React itself doesn't handle error for events/async events.
 * React doesn't know when these events will be triggered and since it doesn't happen during rendering react simply doesn't re-render on these errors.
 * Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.
 * Error boundaries do not catch errors for:

Event handlers (learn more)
Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
Server side rendering
Errors thrown in the error boundary itself (rather than its children)
 * 
 * 
 * **/
const ErrorTest = () => {
  const [count, setCount] = useState(0);
  const { showBoundary } = useErrorBoundary();
  return (
    <div>
      <button
        onClick={() => {
          try {
            setCounter(count + 1);
          } catch (e) {
            showBoundary(e);
          }
        }}
      >
        COUNT IS {count}.CLICK FOR ERROR
      </button>
    </div>
  );
};

export default ErrorTest;
