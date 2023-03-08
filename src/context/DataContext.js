import React, { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext();

export const DataProvider =  ({ children }) => {
  
  const { pokemonList, isLoading } = useFetch();

  return <DataContext.Provider value={{
    pokemonList,
    isLoading
  }}>{children}</DataContext.Provider>;
};
