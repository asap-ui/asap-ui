import { MutableRefObject, useEffect, useState } from 'react';
import { usePrevious } from './hooks';

let _zIndex = 2000;

export function useZIndex(source: any, count: number) {
  const [zIndex, setZIndex] = useState(_zIndex);
  const prev: MutableRefObject<any> = usePrevious(zIndex);

  useEffect(() => {
    if (prev.current !== zIndex) {
      setZIndex(zIndex + count);
      prev.current = zIndex;
    }
  }, [zIndex]);

  return zIndex
}
