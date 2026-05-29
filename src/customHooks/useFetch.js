import { useEffect, useState, useCallback, useRef } from "react";

export function useFetch(url, options = {}) {
    const {
        inmediate = true,
        retryOnError = false,
    } = options;

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(inmediate)
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
            const response = await fetch(url, { signal: abortControllerRef.current.signal });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const newData = await response.json();
            setData(newData);
            return { data: newData, success: true };
        } catch (error) {
            if (error.name !== 'AbortError') {
                setError(error);
                if (retryOnError && isRefetch) {
                    console.warn('Retrying...', error.message);
                }
            }
            return { data: null, success: false, error: error }
        } finally {
            if (isRefetch) setIsRefetching(false);
            else setLoading(false);
        }
    }, [url, retryOnError])

    useEffect(() => {
        if (inmediate) {
            executeFetch();
        }

        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [executeFetch, inmediate])

    const refetch = useCallback(() => executeFetch(true), [executeFetch])

    return { data, loading, error, refetch, isRefetching, setData }
}