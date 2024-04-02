import { createContext, useContext, useState } from "react";
import { useFetch } from "../customHooks/useFetch";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

const baseURL = "https://api.nasa.gov/planetary/apod";
const apiKey = import.meta.env.VITE_API_KEY;
const countData = "9";
const thumb = "True"

export const DataProvider = ({ children }) => {
  const [reloadTrigger, setReloadTrigger] = useState(0)
  const { data, loading, error } = useFetch(`${baseURL}?api_key=${apiKey}&count=${countData}&thumbs=${thumb}`,reloadTrigger);  
  const reloadData = ()=>{
    setReloadTrigger(prev => prev + 1);
  }

  return (
    <DataContext.Provider value={{ data, loading, error, reloadData }}>
      {children}
    </DataContext.Provider>
  );
};
