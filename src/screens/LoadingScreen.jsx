import { useState, useEffect } from "react";

function LoadingScreen({onDataLoaded}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/20')
            .then((response) => response.json())
            .then((data) => onDataLoaded(data.message))
            .catch((err) => console.log(err.message))
    }, [])

    return <div>Loading...</div>
}

export default LoadingScreen