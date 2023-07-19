import { useCallback } from "react";

export const initialzeStore = (initialStore) => {
  let store = initialStore;
  const subscribers = new Set();
  const useStore = () => {
    const getStore = useCallback(() => store, []);
    const setStore = useCallback((value) => {
      store = { ...store, ...value };
      subscribers.forEach((callback) => callback());
    }, []);
    const subscribe = useCallback((callback) => {
      subscribers.add(callback);
      return () => subscribers.delete(callback);
    }, []);

    return {
      getStore,
      setStore,
      subscribe,
    };
  };

  return { useStore };
};
