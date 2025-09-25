import React from 'react'
import {useState} from 'react'
import './Estiloso.css'
function Terceiro() {
    const [temperatura,setTemperatura] = useState(null)

    const roupas = {
        frio:["Calça","Casaco"],
        calor:["Bermuda","Regata"]
    }

    function suaRoupa(){
        if(temperatura >= 22 ){
            setTemperatura(roupas.calor)
        }else{
            setTemperatura(roupas.frio)
        }
    }
  return (
    <div className='estilo' >
     <h1>Roupas</h1>

        <input type="number" value={temperatura} onChange={(e) => suaRoupa(e.target.value)} />


    </div>
  )
}

export default Terceiro