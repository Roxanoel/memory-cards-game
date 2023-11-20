import { useState, useEffect } from "react";
import { getRandomPokemons } from "../utils/useApi";

function LoadingScreen({onDataLoaded}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRandomPokemons(8).then((data) => onDataLoaded(data))
    }, [])

    return <div>Loading...</div>
}

export default LoadingScreen