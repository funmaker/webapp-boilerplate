import { useLocation } from "wouter";
import { useMemo } from "react";

export interface LocationParts {
  pathname: string;
  search: string;
  hash: string;
}

export type LocationLevel = "none" | "pathname" | "search" | "hash" | "all";

export default function useLocationParts() {
  const [location, replaceLocation] = useLocation();
  
  let hashStart: number | null = location.indexOf("#");
  if(hashStart < 0) hashStart = null;
  
  let searchStart: number | null = location.indexOf("?");
  if(searchStart < 0 || (hashStart !== null && searchStart > hashStart)) searchStart = null;
  
  const pathname = location.slice(0, searchStart ?? hashStart ?? location.length);
  const search = searchStart !== null ? location.slice(searchStart + 1, hashStart ?? location.length) : "";
  const hash = hashStart !== null ? location.slice(hashStart + 1, location.length) : "";
  
  const parts = useMemo<LocationParts>(() => ({ pathname, search, hash }), [pathname, search, hash]);
  
  return [parts, replaceLocation] as const;
}

export function locationCmp(a: LocationParts, b: LocationParts, level: LocationLevel = "search") {
  switch(level) {
    case "none": return true;
    case "pathname": return a.pathname === b.pathname;
    case "search": return a.pathname === b.pathname && a.search === b.search;
    case "hash": case "all": return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }
}
