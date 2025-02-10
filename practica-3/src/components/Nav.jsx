import React from 'react'

const Nav = ({ children }) => {

  return (
      <nav className="nav-bar">
        {children}
      </nav>

  )
}

export const Logo = () => {
    return (
        <div className="logo">
          <span role="img">🍿</span>
          <h1>Palomitas de papel</h1>
        </div>
    )
}

export const Search = ({ query, setQuery }) => {
    return (
        <input
          className="search"
          type="text"
          placeholder="Buscar peliculas..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
    )
}

export const NumResults = ({ movies }) => {
    return (
        <p className="num-results">
           <strong>{movies.length}</strong> resultados encontrados
        </p>
    );
}

export default Nav;