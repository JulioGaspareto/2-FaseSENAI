import { useState } from 'react'

import './App.css'
import Avisador from './componets/Avisador'
import Calculadora from './componets/Calculadora'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Avisador/>
     <Calculadora/>
    </>
  )
}

export default App


