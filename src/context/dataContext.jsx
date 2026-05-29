import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { useFetch } from "../customHooks/useFetch";
import { DataContext } from "./DataContext";

const baseURL = "https://api.nasa.gov/planetary/apod";
const apiKey = import.meta.env.VITE_API_KEY;
const countData = "9";
const thumb = "True";

export const DataProvider = ({ children }) => {
  const { data, loading, error, refetch, isRefetching, setData } = useFetch(
    `${baseURL}?api_key=${apiKey}&count=${countData}&thumbs=${thumb}`,
  );

  const reloadData = useCallback(() => {
    refetch();
  }, [refetch]);

  const value = useMemo(
    () => ({
      data,
      loading,
      error,
      reloadData,
      isRefetching,
      setData,
    }),
    [data, loading, error, reloadData, isRefetching, setData],
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
