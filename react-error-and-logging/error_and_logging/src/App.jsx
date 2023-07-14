import ErrorTest from "./react_error_boundary_concept/ErrorTest";
import { ErrorBoundary } from "react-error-boundary";
import Test from "./important-try&catch-concept/Test";
import Fallback from "./react_error_boundary_concept/Fallback/Fallback";
import Counter from "./react_error_boundary_concept/Counter";

function App() {
  return (
    <>
      <Counter />
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={(details) => {
          // Event handler for resetErrorBoundary() in FallbackComponent
          console.log("details", details);
        }}
      >
        <ErrorTest />
      </ErrorBoundary>

      {/**  Will give error as React doesn't know when the components 
        will be rendered and so it doesn't handle try/catch like that.
        So we need toput try/catch in every component at the lowest level.
      **/}
      {/* <Test /> */}
    </>
  );
}

export default App;
