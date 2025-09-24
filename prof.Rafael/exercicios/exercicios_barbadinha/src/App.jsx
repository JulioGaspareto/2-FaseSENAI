import { useState } from 'react'
import './App.css'
import Primeiro from './components/Primeiro'  
import Segundo from './components/Segundo'
function App() {
  const [count, setCount] = useState(0)
const preco = {
  pequena:10,
  media:20,
  grande:30
}

const taxas = {
  dolar: 5.2, 
  euro: 6.1,   
  real: 1      
}

  return (
    <>
    <div className='tudo'> 
    <Primeiro preco={preco}/>
    
    <Segundo/>
    </div>
    </>
  )
}

export default App
