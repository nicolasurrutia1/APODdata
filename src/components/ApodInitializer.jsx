import { useEffect } from "react";
import { useApodStore } from "../stores/useApodStore";

export const ApodInitializer = ({ children }) => {
  const fetchApod = useApodStore((state) => state.fetchApod);

  useEffect(() => {
    fetchApod();
  }, [fetchApod]);

  return children;
}
    
