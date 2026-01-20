import { useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function useMeasure() {
  const [rect, setRect] = useState<DOMRectReadOnly | null>(null);
  const [node, setNode] = useState<Element | null>(null);
  
  useEffect(() => {
    if(!node) return;
    
    const observer = new ResizeObserver(([entry]) => setRect(entry.contentRect));
    observer.observe(node);
    setRect(node.getBoundingClientRect()); // eslint-disable-line react-hooks/set-state-in-effect
    
    return () => {
      observer.disconnect();
    };
  }, [node]);
  
  return { ref: setNode, rect };
}
