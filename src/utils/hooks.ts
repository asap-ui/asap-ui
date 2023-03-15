import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState as useReactState,
} from 'react';

const componentContext = createContext('');

export const useStatus = () => {
  const value: any = useContext(componentContext);
  const Provide = componentContext.Provider;
  return [Provide, value];
};

// 保证组件卸载后不再执行异步操作
const useUnmountedRef = () => {
  const unmountedRef = useRef(false);
  // 组件卸载的时候，将 unmountedRef.current 设置为 true
  useEffect(() => {
    return () => {
      unmountedRef.current = true;
    };
  }, []);
  return unmountedRef;
};

// 持久化的 state，卸载后不会重置
export const useState = (initState?: any) => {
  const unmountedRef = useUnmountedRef();
  const [state, setState] = useReactState(initState);
  const setCurrentState = useCallback((currentState: any) => {
    if (unmountedRef.current) {
      return;
    }
    setState(currentState);
  }, []);
  return [state, setCurrentState];
};
