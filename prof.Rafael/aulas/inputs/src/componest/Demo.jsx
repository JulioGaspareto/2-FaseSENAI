import React, { useState } from 'react'
import './Demo.css'

function Demo() {
    const[inputUsername, setInputUserName] = useState('')
    const[inputSenha, setInputsenha]=useState()
    function fazerLogin(){
        alert(inputUsername)
    }
  return (
    <div className='demo-container'>
        <h2>bota teu nome</h2>
        <label htmlFor=""> nome de usuario</label>
        <br />
        <input type="text" 
            value={inputUsername}
            onChange={(event) => setInputUserName(event.target.value)}
            
         />
         <br />
         <label htmlFor="">Senha</label>
       <input type="password" value={inputSenha}
        onChange={(e) => setInputsenha(e.target.value)}/>


         <br />
         <button onClick={fazerLogin}>Logar</button>
        </div>
  )
}

export default Demo

// rfce para puxar tudo