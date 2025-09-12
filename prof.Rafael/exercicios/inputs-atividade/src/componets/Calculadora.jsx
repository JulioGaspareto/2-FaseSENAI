import React, { useState } from 'react';

function Calculadora() {
    const [InputTotal, setInputTotal] = useState('')
  
    function handleInputChange(e){
    setInputTotal(e.target.value);
}
function resultado(){

}
  
    return (
    <div>
        <input type="number" />
        <input type="number" />
        <input type="number" />
     
     <button onClick={resultado}></button>

        </div>

  )
}

export default Calculadora