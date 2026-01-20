import { useEffect, useRef } from "react";

type Compare<T> = (a: T, b: T) => boolean;
type Callback<T> = (a: T, b: T) => void;
export const defaultCmp = <T>(a: T, b: T) => a === b;
export const arrayCmp = <T extends readonly any[]>(a: T, b: T) => a.length === b.length && a.every((el, id) => a[id] === b[id]);

export default function useChange<T>(val: T, callback: Callback<T>, cmpFn: Compare<T> = defaultCmp) {
  const valRef = useRef(val);
  
  useEffect(() => {
    if(!cmpFn(val, valRef.current)) {
      callback(val, valRef.current);
      valRef.current = val;
    }
  }, [callback, cmpFn, val]);
}
