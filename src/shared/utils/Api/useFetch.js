import { useEffect, useState, useCallback } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (response.status === 200) {
                setData(data);
            };
        } catch (err) {
            setError(err.message || "Unexpected Error.");
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        getData();
    }, [url, getData]);

    return { data, error, loading };
};