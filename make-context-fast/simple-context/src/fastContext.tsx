import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useCallback,
  useEffect,
  useSyncExternalStore,
} from "react";
/** 
 * Using refs technique won't work as even if we change input using local state
 of input component and set value in ref.There's no way to send that value to display.
 * **/
function useFastContext<Store>(initialStore: Store): any {
  //   type Store = {
  //     first: string;
  //     last: string;
  //   };

  function useStoreData(): {
    set: (value: Partial<Store>) => void;
    get: () => Store;
    subscribe: (callback: () => void) => () => void;
  } {
    const store = useRef(initialStore);
    const subscribers = useRef(new Set<() => void>());

    // WHENEVER YOU PASS A FUNCTION AS OUTPUT OF A CUSTOM HOOK ALWAYS useCallback
    const get = useCallback(() => store.current, []);
    const set = useCallback((value: Partial<Store>) => {
      store.current = { ...store.current, ...value };
      console.log("subscribers", subscribers);
      subscribers.current.forEach((callback) => {
        callback(); // all components setState() are callled.For here 4 times.
      });
    }, []);
    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => {
        subscribers.current.delete(callback);
      };
    }, []);
    return { get, set, subscribe };
  }

  type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

  const StoreContext = createContext<UseStoreDataReturnType | null>(null);

  const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
      <StoreContext.Provider value={useStoreData()}>
        {children}
      </StoreContext.Provider>
    );
  };

  function useStore<T>(
    selector: (store: Store) => T
  ): [T, (value: Partial<Store>) => void] {
    const store = useContext(StoreContext);
    if (!store) throw new Error("Store not found");
    // const [state, setState] = useState<Store>(store.get());
    // useEffect(() => {
    //   return store.subscribe(() => setState(store.get()));
    // }, []);
    const state = useSyncExternalStore(store.subscribe, () =>
      selector(store.get())
    );
    return [state, store.set];
  }
  return { Provider, useStore };
}

export default useFastContext;
