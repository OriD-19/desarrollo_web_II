import { useEffect, useState } from "react";
import Nav, { NumResults, Logo, Search } from "./components/Nav";
import { MovieList } from "./components/Movie";
import Box from "./components/Box";
import WatchedMovie, { WatchedMovieList, WatchedSummary } from "./components/WatchedMovie";
import WatchedMovieContainer from "./components/WatchedMovie";
import useFetchMovies from "./hooks/useFetchMovies";
import { MovieDetails } from "./components/MovieDetails";

export default function App() {
  const [query, setQuery] = useState("");

  const { movies, isLoading, error } = useFetchMovies(query);

  const localStorageWatched = JSON.parse(localStorage.getItem('watchedMovies')) ?? [];

  const [watched, setWatched] = useState(localStorageWatched);
  const [selectedId, setSelectedId] = useState(null);

  // add functionality to support local storage of watched movies

  useEffect(() => {
    localStorage.setItem('watchedMovies', JSON.stringify(watched));
  }, [watched])

  function handleSelectMovie(id) {
    setSelectedId(id);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched(prev => [...prev, movie]);
  }

  return (
    <>
      <Nav>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Nav>

      <main className="main">
        <Box>
          {isLoading && <p className="loader">Cargando...</p>}
          {error && <p className="error">⛔ {error}</p>}
          <MovieList movies={movies} onSelectMovie={handleSelectMovie}/>
        </Box>

        <Box>
          <WatchedMovieContainer watched={watched}>
            {selectedId ? (
              <MovieDetails 
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatched}
                watched={watched}
              />
            ) : (
              <>
                <WatchedSummary watched={watched}/>
                <WatchedMovieList watched={watched} setWatched={setWatched}/>
              </>
            )}
          </WatchedMovieContainer>
        </Box>

      </main>
    </>
  );
}
