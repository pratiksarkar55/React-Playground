import { useState } from "react";
import "./App.css";

function App() {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState("red");
  const [input, setInput] = useState("");
  const handleData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos");
    let jsonData = await data.json();
    return jsonData;
  };

  async function retry(operation, retries = 5, delay = 5000) {
    for (let i = 0; i < retries; i++) {
      try {
        const result = await handle1000Requests();
        return result; // Return the result if operation succeeds
      } catch (error) {
        console.error(`Attempt ${i + 1} failed:`, error);
        await new Promise((resolve) => setTimeout(resolve, delay)); // Delay before retrying
      }
    }
    throw new Error(`Operation failed after ${retries} retries`);
  }

  const handle1000Requests = async () => {
    // const results = await Promise.all(
    //   Array.from(Array(10_000)).map(async (_, index) => {
    //     const response = await fetch(
    //       `https://jsonplaceholder.typicode.com/todos`
    //     );
    //     const json = await response.json();
    //     return json;
    //   })
    // );
    const results = [];
    const executing = [];
    const concurrencyLimit = 6;

    function runLoopChunks(iterations, chunkSize, delay) {
      let counter = 0;

      async function runChunk() {
        for (let i = 0; i < chunkSize && counter < iterations; i++) {
          const resultPromise = handleData().then((obj) => {
            //  setClicked(true);
            results[i] = obj;
            return obj;
          });
          executing.push(resultPromise);
          if (executing.length >= concurrencyLimit || i === iterations - 1) {
            await Promise.all(executing);
            executing.length = 0;
          }
          console.log(counter);
          counter++;
        }

        if (counter < iterations) {
          // Schedule the next chunk to run asynchronously
          setTimeout(runChunk, delay);
        }
      }

      // Start running the first chunk
      runChunk();
    }

    runLoopChunks(10000, 10, 0);
  };

  return (
    <>
      CLick to fire ten thousand requests in parallel
      <button
        onClick={
          !clicked
            ? () => {
                retry(handle1000Requests);
              }
            : () => {}
        }
      >
        Click for disaster
      </button>
      <input
        value={input}
        onInput={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        style={{ color: color }}
        onClick={() => {
          setColor(color === "red" ? "green" : "red");
        }}
      >
        Change color
      </button>
    </>
  );
}

export default App;
