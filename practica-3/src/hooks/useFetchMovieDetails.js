import { useState, useEffect } from "react";

export const useFetchMovieDetails = (selectedId) => {
    const API_KEY = "c4313e3d";
    const API_URL = `https://www.omdbapi.com/?apikey=c4313e3d`;

    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!selectedId) {
            setMovie({});
            setError("");
            return;
        }

        async function fetchMovieDetails(selectedId) {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch(`${API_URL}&i=${selectedId}`);

                if (!response.ok) {
                    throw new Error("Error al cargar los detalles de la película")
                }

                const data = await response.json();

                setMovie(data);
            } catch(err) {
                setError(err.message);
                setMovie({});
            } finally {
                setIsLoading(false);
            }
        }

        fetchMovieDetails(selectedId);
    }, [selectedId])

    return { movie, isLoading, error };
}