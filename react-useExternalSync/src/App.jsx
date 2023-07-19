import { useEffect, useState } from "react";
import "./App.css";
import { initialzeStore } from "./store";
import { useSyncExternalStore } from "react";

const useStoreData = (store, subscribe, getStore, selector) => {
  let initialState = selector(getStore());
  // const [state, setState] = useState(initialState);
  // useEffect(() => subscribe(() => setState(selector(getStore()))), []);
  // This hook does the same job as the above two lines.The third argument in useSyncExternalStore is for SSR
  //NEED TO STUDY SERVER SIDE RENDERING(SSR)
  const state = useSyncExternalStore(subscribe, () => selector(getStore()));
  return state;
};

const CustomButton = ({ value, useStore }) => {
  const { setStore, getStore, subscribe } = useStore();
  return (
    <>
      <button
        onClick={() => {
          const store = getStore();
          setStore({ [value]: store[value] + 1 });
        }}
      >
        Click to increment {value}
      </button>
    </>
  );
};

const DisplayValue = ({ value, useStore }) => {
  const { getStore, subscribe } = useStore();
  const store = getStore();
  const fieldValue = useStoreData(
    store,
    subscribe,
    getStore,
    (store) => store[value]
  );
  return (
    <>
      <button>
        Value of {value} is {fieldValue}
      </button>
    </>
  );
};

function App() {
  const { useStore } = initialzeStore({ first: 0, second: 0 });

  return (
    <>
      <div>
        <CustomButton value={"first"} useStore={useStore} />
      </div>
      <div>
        <CustomButton value={"second"} useStore={useStore} />
      </div>
      <div>
        <DisplayValue value={"first"} useStore={useStore} />
      </div>
      <div>
        <DisplayValue value={"second"} useStore={useStore} />
      </div>
    </>
  );
}

export default App;
