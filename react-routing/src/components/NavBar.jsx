import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" href="#">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/" end>Home</NavLink>
                        <NavLink className="nav-link" to="/about" end>About</NavLink>
                        <NavLink className="nav-link" to="/about/team">Team</NavLink>
                        <NavLink className="nav-link" to="/login">Pricing</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar