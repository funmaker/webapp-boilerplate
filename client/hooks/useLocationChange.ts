import useChange from "./useChange";
import useLocationParts, { LocationParts } from "./useLocationParts";

type Callback = (current: LocationParts, prev: LocationParts) => void;
export const locationCmp = (a: LocationParts, b: LocationParts) => a.pathname + a.search === b.pathname + b.search;

export default function useLocationChange(callback: Callback) {
  const [location] = useLocationParts();
  
  useChange(location, callback, locationCmp);
}
