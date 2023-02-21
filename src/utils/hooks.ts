import { createContext, useContext } from 'react';

const componentContext = createContext('');

export const useStatus = () => {
  const value: any = useContext(componentContext);
  const Provide = componentContext.Provider;
  return [Provide, value];
};
