import React from 'react'

import './Avisador.css'

function Avisador() {
   
    function avisar(){
        alert("As regras são: Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.")
    }
  return (
    <div className='Avisador-container'>
        
        <button onClick={avisar}>Avisos</button>

    </div>
  )
}

export default Avisador