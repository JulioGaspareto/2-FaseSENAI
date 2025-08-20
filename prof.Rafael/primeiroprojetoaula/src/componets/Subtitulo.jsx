import './Subtitulo.css'

function Subtitulo(props) {
  return (
    <h2 className='subtitulo-container'>
        {props.testando}
        {props.emoji}
        
        {console.log(props)}
    </h2>
  )
}

export default Subtitulo