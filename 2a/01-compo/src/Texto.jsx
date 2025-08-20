
import './Texto.css'

function Texto(props) {
  return (
    <div className='texto-conteiner'>
        <p>{props.texto} </p>
    </div>
  )
}

export default Texto