import React from 'react'
import './Primeiro.css'
import { useState } from "react";


function Primeiro({preco}) {
   

const [valorSelecionado, setValorSelecionado] = useState(null);


    function Totalpequena(){
        setValorSelecionado(preco.pequena)
    
    }

    function Totalmedia(){
        setValorSelecionado(preco.media)
    }
    function Totalgrande(){
        setValorSelecionado(preco.grande)
    }
  return (
    <div className='estilo'>
        <h2>1)escolha de pizza</h2>
        <button onClick={Totalpequena}>pequena</button>
        <button onClick={Totalmedia}>media</button>
        <button onClick={Totalgrande}>grande</button>

        
        {valorSelecionado !== null && (<p>o valor da pizza é ${valorSelecionado}</p>)}
    </div>
  )
}

export default Primeiro