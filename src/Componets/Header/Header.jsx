import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink className="nav-link active" aria-current="page"  to="/">Home</NavLink>
                <NavLink className="nav-link" to="/view">View data</NavLink>
                <NavLink className="nav-link" to="/from">From</NavLink>
                {/* <NavLink className="nav-link disabled" to="card">Card</NavLink> */}
                </div>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
