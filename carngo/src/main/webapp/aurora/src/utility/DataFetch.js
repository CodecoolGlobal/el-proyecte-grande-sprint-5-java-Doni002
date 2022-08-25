import { useState, useEffect } from "react";

export default function DataFetch(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /*useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    props.url
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch(err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData().then();
    }, [error]);
    if(error != null){
        return error.message;
    }
    else if{

    }*/
    return data;
}