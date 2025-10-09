import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navBarTop'>
     
        <Link to="/"> Home </Link>
        <Link to="/borracharia"> Borracharia </Link>
        <Link to="/sorveteria"> Sorveteria </Link>
        <Link to="/bar"> Bar </Link>
    </nav>

    
  )
}

export default Navbar