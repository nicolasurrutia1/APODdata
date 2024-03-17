import { useEffect, useState } from "react";

export function useFetch(url, dependencies) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try{
                const response = await fetch(url)
                const newData = await response.json()
                setData(newData);
            }catch(e){
                setError(e)
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [dependencies])
    return {data, loading, error}
}