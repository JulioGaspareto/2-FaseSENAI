
import './Avisador.css'

import React, { useState } from 'react';

function Avisador() {
  const [inputValue, setInputValue] = useState('Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.');
  const [tela, setTela] = useState('');

  function handleInputChange(event){
    setInputValue(event.target.value);
  }
  function tratarClique(){
    setTela(inputValue)
  }
  return (
    <div className='avisador-container'>
    
      <button onClick={tratarClique}>Aviso</button>
    
      <p>{tela}</p>
    </div>
  );
}

export default Avisador