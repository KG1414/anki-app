import { useEffect, useState, useCallback } from "react";

export const useFetch = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getData = async (...args) => {
        setLoading(true);
        try {
            const response = await apiFunc(...args);
            const data = await response.json();
            if (response.status === 200) {
                setData(data);
            };
        } catch (err) {
            setError(err.message || "Unexpected Error.");
        } finally {
            setLoading(false);
        }
    };
    return { data, error, loading, getData };
};

export const useFetchOnLoad = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getData = useCallback(async (...args) => {
        setLoading(true);
        try {
            const response = await apiFunc(...args);
            const data = await response.json();
            if (response.status === 200) {
                setData(data);
            };
        } catch (err) {
            setError(err.message || "Unexpected Error.");
        } finally {
            setLoading(false);
        }
    }, [apiFunc]);


    useEffect(() => {
        getData();
    }, [getData]);
    return { data, error, loading, getData };
};
