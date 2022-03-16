import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const response = await fetch(url);
        const data = response.json();
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, [url]);

    return { data, loading };
};