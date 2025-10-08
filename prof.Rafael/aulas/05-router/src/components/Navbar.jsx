import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav className='separador'>
        <Link to="/">Home Page</Link>
        <Link to="/pagina1">pageI</Link>
        <Link to="/paginaDois">pII</Link>
        <Link to="/pagina3">PIII</Link>
        <Link to="/produtos">Produtos</Link>
    </nav>
  )
}

export default Navbar