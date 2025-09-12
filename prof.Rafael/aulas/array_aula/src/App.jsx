import React, { useState } from 'react'
import './App.css'

function App() {
  const [senha,setSenha] = useState("")

const [pessoas,setPessoas ]= useState([ {id:1, nome:"BinBum",idade:72},
  {id:2, nome:"Corno",idade:69},
  {id:3, nome:"rodrigo",idade:90},
  {id:4, nome:"tuntuntun",idade:77},
  {id:5, nome:"peputim",idade:70},
  {id:6, nome:"fernando",idade:20}
])

function cadastrar(){
  let pessoa = {
    id: Date.now(),
    nome: label,
    idade: Number(prompt("sua idade"))
  }
  setPessoas([pessoa, ...pessoas])
}

  return (
    <div>
        <h1>Arrays</h1>
        <div>
          <label htmlFor="">Nome </label>
          <input type="text" 
          velue={senha}
          onChange={(e) => setSenha(e.target.value)}/>
          <br />
          <label htmlFor="">idade </label>
          <input type="Number" />
        </div>
        <button onClick={cadastrar}>Cadastrar</button>
      <div className='container-cards'>
      {pessoas.map((pessoa) => (
        <div key={pessoa.id} className='card-pessoa'>
        <h2>{pessoa.nome}</h2>
        <p>Idade: {pessoa.idade}</p>

        </div>
      ))}
      </div>
      </div>
  )
}

export default App