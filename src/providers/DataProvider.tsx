/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { ReactNode, createContext, useContext } from 'react';

type ContextType = {
  data: any;
  loading?: boolean;
  fetchData?: () => void;
};

type DataProviderProps = {
  children: ReactNode;
  data: any;
  loading?: boolean;
  fetchData?: () => void;
};
const DataContext = createContext<ContextType | null>(null);

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData precisa estar em volta de um DataProvider');
  }
  return context;
}

export function DataProvider({
  children,
  data,
  loading,
  fetchData,
}: DataProviderProps) {
  const contextValue: ContextType = {
    data,
    loading,
    fetchData,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}
