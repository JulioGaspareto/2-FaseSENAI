import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
        <Link to="/">Home Page</Link>
        <Link to="/pagina1">pageI</Link>
        <Link to="/paginaDois">pII</Link>
        <Link to="/pagina3">PIII</Link>
    </nav>
  )
}

export default Navbar