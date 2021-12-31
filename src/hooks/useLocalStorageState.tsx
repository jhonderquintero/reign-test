import * as React from "react";

const isBrowser = typeof window !== "undefined";
const noop = () => {};

/**
  Save and update local storage value, with useState
 * @param {String} key The key to set in localStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 * @param {{serialize: Function, deserialize: Function}} parseOptions (default values equals to JSON.stringify and JSON.parse respectively)
 * @returns [state, setState]
 */

export function useLocalStorageState<T> (
  key: string,
  defaultValue: object | string | Function = "",
  { serialize = JSON.stringify, deserialize = JSON.parse }: parseOptions = {}
): StorageStateValue {
  if (!key) {
    throw new Error("useLocalStorage key may not be null or falsy");
  }

  if (!isBrowser) {
    return [defaultValue, noop, noop];
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = React.useState<T | null>(() =>
    window.localStorage.getItem(key)
      ? deserialize(window.localStorage.getItem(key))
      : typeof defaultValue === "function"
      ? defaultValue()
      : defaultValue
  );

  const remove = () => {
    try {
      window.localStorage.removeItem(key);
      setState(null);
    } catch (error) {
      console.error(error);
      // If user is in private mode or has storage restriction localStorage can throw
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [state, key, serialize]);

  return [state, setState, remove];
};

interface parseOptions {
  serialize?: Function;
  deserialize?: Function;
}

type StorageStateValue = [
  state: string | null | Function | object | any,
  setState: React.Dispatch<React.SetStateAction<any | null>>,
  remove: () => void
];
