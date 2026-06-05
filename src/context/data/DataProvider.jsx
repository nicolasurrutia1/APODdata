import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { useFetch } from "../../customHooks/useFetch";
import { DataContext } from "./DataContext";

const apodParams = {
  api_key: import.meta.env.VITE_API_KEY,
  count: "9",
  thumbs: "True",
}

export const DataProvider = ({ children }) => {
  const { data, loading, error, refetch, isRefetching, setData } = useFetch(
    "",
    {
      params: apodParams,
    },
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
