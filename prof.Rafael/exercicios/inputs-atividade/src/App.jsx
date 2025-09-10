import { useState } from 'react'

import './App.css'
import Avisador from './componets/Avisador'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Avisador/>
    </>
  )
}

export default App


