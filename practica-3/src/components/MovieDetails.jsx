import { useState } from "react";
import { useFetchMovieDetails } from "../hooks/useFetchMovieDetails"
import StarRating from "./StarRating";

export const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
    const { movie, error, isLoading } = useFetchMovieDetails(selectedId);

    const {
        Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movie;

    const [userRating, setUserRating] = useState('');
    const isWatched = watched.some(movie => movie.imdbID === selectedId);
    const watchedUserRating = watched.find(movie => movie.imdbID === selectedId)?.userRating;

    function handleAdd() {
        const newMovie = {
            imdbID: selectedId,
            Title: title,
            Year: year,
            Poster: poster,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime.split(' ')[0]),
            userRating,
        };

        onAddWatched(newMovie);
        onCloseMovie();
    }

    return (
        <div className="details">
            {isLoading ? (
                <p className="loader">Cargando...</p>
            ) : (
                <>
                <header>
                    <button className="btn-back" onClick={onCloseMovie}>
                        &larr;
                    </button>
                    <img src={poster} alt={`Poster de ${title}`} />
                    <div className="details-overview">
                        <h2>{title}</h2>
                        <p>{released} &bull; {runtime}</p>
                        <p>{genre}</p>
                        <p><span>⭐</span>{imdbRating} IMDB Rating</p>
                    </div>
                </header>
                <section>
                    <div className="rating">
                        {!isWatched ? (
                            <>
                                <StarRating maxRating={10} size={18} onSetRating={setUserRating} />
                                {userRating > 0 && (
                                    <button className="btn-add" onClick={handleAdd}>
                                        + Agregar a la lista
                                    </button>
                                )}
                            </>
                        ) : (
                            <>
                                <p>Has calificado la película con {watchedUserRating} ⭐</p>
                            </>
                        )}
                    </div>
                    <p><em>{plot}</em></p>
                    <p><em>Elenco: </em> {actors}</p>
                    <p><em>Director: </em> {director}</p>
                </section>
                </>
            )}
        </div>
    )
}