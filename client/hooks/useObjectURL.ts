import { useEffect, useMemo } from "react";

export default function useObjectURL(object: Blob | MediaSource | string): string;
export default function useObjectURL(object?: Blob | MediaSource | string | null): string | null;
export default function useObjectURL(object: Blob | MediaSource | string | null = null): string | null {
  const { url, objectUrl } = useMemo(() => {
    if(object === null) return { url: null, objectUrl: false };
    else if(typeof object === "string") return { url: object, objectUrl: false };
    else return { url: URL.createObjectURL(object), objectUrl: true };
  }, [object]);
  
  useEffect(() => () => {
    if(objectUrl && url) URL.revokeObjectURL(url);
  }, [url, objectUrl]);
  
  return url;
}
