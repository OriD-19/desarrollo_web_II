import { useState } from "react";
import { Logo, Nav, NumResults, Search } from "./componentes/Nav.jsx";
import { Box } from "./componentes/Box";
import { MovieList } from "./componentes/Movie";
import { WatchedMoviesContainer, WatchedMoviesList, WatchedSummary } from "./componentes/WatchedMovie";
import { useFetchMovies } from "./hooks/useFetchMovies.js";
import { MovieDetails } from "./componentes/MovieDetails";

/**  * Componente principal de la aplicación.  */

export default function App() {
  //estado para la busqueda de la pelicula
  const [query, setQuery] = useState("");

  //obtiene peliclas basadas en la consulta
  const { movies, isLoading, error } = useFetchMovies(query);

  //Estado de peliculas vistas
  const [watched, setWatched] = useState([]);

  //estado para la pelicula seleccionada
  const [selectedId, setSelectedId] = useState(null);

  /**    * Maneja la selección de una película.    
   * @param {string} id - ID de la película seleccionada.    */

  function handleSelectMovie(id) {
    setSelectedId(id);
  }

  /**    * Cierra los detalles de la película.    */
  function handleCloseMovie() {
    setSelectedId(null);
  }

  /**    * Agrega una película a la lista de vistas.    
   * @param {Object} movie - Película a agregar.    */
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
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
          <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        </Box>

        <Box>
          <WatchedMoviesContainer>
            {selectedId ? (
              <MovieDetails
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatched}
                watched={watched}
              />
            ) : (
              <>
                <WatchedSummary watched={watched} />
                <WatchedMoviesList watched={watched} />
              </>
            )}
          </WatchedMoviesContainer>
        </Box>
      </main>
    </>
  );
}
