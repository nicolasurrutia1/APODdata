import { createContext, useContext } from "react";
import { useFetch } from "../customHooks/useFetch";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

const baseURL = "https://api.nasa.gov/planetary/apod";
const apiKey = import.meta.env.VITE_API_KEY;
const countData = "3";

export const DataProvider = ({ children }) => {
  const { data, loading, error } = useFetch(`${baseURL}?api_key=${apiKey}&count=${countData}`);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
