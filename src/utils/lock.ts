import { useEffect, useId, useRef } from 'react';

const LockMap: Record<string, any> = {};

export function resolveLock() {
  const lockCounts: number = Object.keys(LockMap).length;
  lockCounts <= 0
    ? document.body.classList.remove('asap--lock')
    : document.body.classList.add('asap--lock');
}

export function addLock(uid: string) {
  LockMap[uid] = 1;
  resolveLock();
}

export function releaseLock(uid: string) {
  delete LockMap[uid];
  resolveLock();
}

export function useLock(source: any, useSource: any = undefined) {
  const uid = useId();

  useEffect(() => {
    if (useSource !== undefined) {
      if (useSource === false) {
        releaseLock(uid);
      } else if (useSource === true && source === true) {
        addLock(uid);
      }
    } else {
      if (source === true) {
        addLock(uid);
      } else {
        releaseLock(uid);
      }
    }
  }, [source, useSource]);
}
