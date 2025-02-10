import React from 'react'

const WatchedMovieContainer = ({ watched, children }) => {
    return (
        <>
            {children}
        </>
    )
}

export const WatchedMovieList = ({ watched, setWatched }) => {
    return (
        <ul className="list">
            {watched.map((movie) => <WatchedMovie movie={movie} key={movie.imdbID} setWatchedMovies={setWatched}/>)}
        </ul>
    )
}

const WatchedMovie = ({ movie, setWatchedMovies }) => {

    function handleDelete(id) {
        setWatchedMovies(prev => prev.filter(mov => mov.imdbID !== id))
    }

    return (
        <li>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                </p>
                <button className="btn-delete" onClick={() => handleDelete(movie.imdbID)}>X</button>
            </div>
        </li>
    )
}

export const WatchedSummary = ({ watched }) => {

    const average = (arr) =>
        arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
    const avgUserRating = average(watched.map((movie) => movie.userRating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));

    return (
        <div className="summary">
            <h2>Movies you watched</h2>
            <div>
                <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{avgRuntime.toFixed(2)} min</span>
                </p>
            </div>
        </div>
    );
}

export default WatchedMovieContainer;