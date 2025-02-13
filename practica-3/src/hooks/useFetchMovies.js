import { useEffect, useState } from "react";

const useFetchMovies = (query) => {
    const API_KEY = "c4313e3d";
    const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=c4313e3d&s=${query}`;

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
        }

        const getMovies = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const res = await fetch(API_URL);

                if (!res.ok) {
                    throw new Error("Error al cargar las películas")
                }

                const data = await res.json();

                if (data.Response === "False") {
                    throw new Error("No se encontraron resultados")
                }

                setMovies(data.Search);
            } catch (err) {
                setError(err.message);
                setMovies([]);
            } finally {
                setIsLoading(false);
            }
        }

        getMovies();
    }, [query])

    return { movies, isLoading, error };
}

export default useFetchMovies;