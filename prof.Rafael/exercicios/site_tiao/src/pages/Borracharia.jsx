import { useContext } from "react"
import './Borracharia.css'
import React from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from "../context/GlobalContext"
function Borracharia() {
    const{pborracharia} = useContext(GlobalContext)
  return (
<div>
    <Navbar/>
   
        <h1>Serviços</h1>
  
        {pborracharia.map((p) => (

            <div key={p.id}>
            {p.nome}
            </div>
        ))}

    </div>
  )
}

export default Borracharia