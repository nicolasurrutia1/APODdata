import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import { nasaClient } from "../api/axiosClient";

export function useFetch(url, options = {}) {
    const {
        immediate = true,
    } = options;

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(immediate)
    const [error, setError] = useState(null)
    const [isRefetching, setIsRefetching] = useState(false)

    const abortControllerRef = useRef(null)

    const executeFetch = useCallback(async (isRefetch = false) => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort()
        }
        abortControllerRef.current = new AbortController();

        if (isRefetch) setIsRefetching(true)
        else setLoading(true)

        setError(null);

        try {
            const response = await nasaClient.get(url, {
                signal: abortControllerRef.current.signal,
                params: options.params,
            });
            const newData = response.data;
            setData(newData);
        } catch (error) {
            const message = error.response ? `NASA API respondió ${error.response.status}` : error.message;
            if (axios.isCancel(error)) {
                return;
            }
            setError(message);
        } finally {
            if (isRefetch) setIsRefetching(false);
            else setLoading(false);
        }
    }, [url, options.params])

    useEffect(() => {
        if (immediate) {
            executeFetch();
        }

        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [executeFetch, immediate])

    const refetch = useCallback(() => executeFetch(true), [executeFetch])

    return { data, loading, error, refetch, isRefetching, setData }
}