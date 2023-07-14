import * as React from "react";
import ReactDOM from "react-dom";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function Greeting({ subject }) {
  return <div>Hello {subject.toUpperCase()}</div>;
}

function Farewell({ subject }) {
  return <div>Goodbye {subject.toUpperCase()}</div>;
}

export default function Test() {
  try {
    return (
      <div>
        <Greeting />
        <Farewell />
      </div>
    );
  } catch (error) {
    return <ErrorFallback error={error} />;
  }
}
