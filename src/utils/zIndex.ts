import { useEffect, useState } from 'react';

let _zIndex = 2000;

export function useZIndex(source: any, count: number) {
  const [zIndex, setZIndex] = useState(_zIndex);

  useEffect(() => {
    if (source) {
      _zIndex += count;
      setZIndex(_zIndex);
    }
  }, [source]);

  return zIndex;
}
