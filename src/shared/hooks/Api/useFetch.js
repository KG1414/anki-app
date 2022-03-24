import { useEffect, useState, useCallback } from "react";

export const useFetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getData = useCallback(async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data === undefined) return;
            if (response.status === 200) {
                setData(data);
            }
        } catch (err) {
            setError(err.message || "Unexpected Error.");
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 600);
        }
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    return { data, error, loading, getData };
};
