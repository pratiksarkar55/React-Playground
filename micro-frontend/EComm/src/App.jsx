"use client";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "Home/Header";
import Footer from "Home/Footer";

import { ErrorBoundary } from "react-error-boundary";

// const RemoteHeader = React.lazy(() => import("Home/Header"));
// const RemoteFooter = React.lazy(() => import("Home/Footer"));

function Fallback({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const App = () => (
  <div className=" text-3xl mx-auto max-w-6xl">
    {/* Error boundary prevents app from crashing if there's any other in remote modules */}
    {/* <Suspense fallback={"loading..."}> */}
    <ErrorBoundary FallbackComponent={Fallback}>
      <Header />
    </ErrorBoundary>
    {/* </Suspense> */}
    <div className="my-10">EComm Page Content</div>
    <ErrorBoundary fallback={<h4>Something wnet wrong</h4>}>
      {/* <Suspense fallback={"loading..."}> */}
      <Footer />
      {/* </Suspense> */}
    </ErrorBoundary>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
