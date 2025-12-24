'use client'

import { createContext, useContext, useRef } from 'react';
import { RouteLoader } from '@/components/molecules/route-loader/RouteLoader';

const RouteLoaderContext = createContext({
  startLoading: () => {},
  stopLoading: () => {}
});

export function RouteLoaderProvider({ children }) {
  const loaderRef = useRef(null);

  return (
    <RouteLoaderContext.Provider 
      value={{
        startLoading: () => loaderRef.current?.start(),
        stopLoading: () => loaderRef.current?.stop()
      }}
    >
      <RouteLoader ref={loaderRef} />
      {children}
    </RouteLoaderContext.Provider>
  );
}

export const useRouteLoader = () => useContext(RouteLoaderContext);