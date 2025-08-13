import Titulo from '../Titulo'
import './Corpo.css'
import Textao from './Textao'
import Texto from './Texto'
import Titulo2 from './Titulo2'

function Corpo() {
  return (
    <div className='corpo-conteiner'>
        <Titulo/>
        <Titulo2 texto={"Primerio Parte"} emoji={"👌"}/>
        <Texto/>
        <Titulo2 texto={"Segunda Parte"}  emoji={"😎"}/>
        <Textao/>
    </div>
  )
}

export default Corpo