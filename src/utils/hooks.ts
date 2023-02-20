import { createContext, useContext } from 'react';

const componentContext = createContext('');

export const useStatus = () => {
  const Provide = componentContext.Provider;
  const value = useContext(componentContext);
  return [Provide, value];
};
