import './Corpo.css'
import Texto from './Texto'
import Textao from './Textao'
import Subtitulo from './Subtitulo'
function Corpo() {
  return (
    <div className='corpo-container'>       
    <Texto/>
    <Subtitulo testando={"Regras"} emoji={"🙌"}/>
    <Textao/>

    </div>
  )
}

export default Corpo