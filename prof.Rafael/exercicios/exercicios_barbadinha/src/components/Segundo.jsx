import React from 'react'
import './Estiloso.css'
import { useState } from 'react'
function Segundo() {

  const [real,setReal] = useState(null)
  const [dolar, setDolar] = useState(null)
  const [euro,setEuro] = useState(null)

  const valor = {
    dolar: 5.33,
    euro:6.26
  }

  function converterReal(total){
    setReal(total)
    setDolar((total/valor.dolar).toFixed(2))
    setEuro((total/valor.euro).toFixed(2))
  }

  function converterDolar(total){
    setDolar(total)
    setReal((total*valor.dolar).toFixed(2))
    setEuro(((total*valor.dolar)/ valor.euro).toFixed(2))

  }

  function converterEuro(total){
    setEuro(total)
    setDolar(((total*valor.euro)/valor.dolar).toFixed(2))
    setReal((total*valor.euro).toFixed(2))

  }

  return (

    <div className='estilo'>   
        <h1>moedas</h1>
      

        <label htmlFor="">Real              </label>
      
        <input type="number" value={real}
            onChange={(e) => converterReal(e.target.value)}/>


        <br />
        <label htmlFor="">Dolar </label>
      
        <input type="number" value={dolar} onChange={(e) => converterDolar(e.target.value)} />
        
        <br />
        <label htmlFor="">Euro             </label>
        <input type="number" value={euro} onChange={(e) => converterEuro(e.target.value)}/>

    </div>
  )
}

export default Segundo