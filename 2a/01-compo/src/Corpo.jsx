import Titulo from '../Titulo'
import './Corpo.css'
import Textao from './Textao'
import Texto from './Texto'
import Titulo2 from './Titulo2'

function Corpo() {
  function Login(){
    let usuario = prompt("Digite o nome do usuario 😎:")

    if(usuario == "fome"){
      alert("que isso meu fii")
    }else{
      alert("rapaz...era fome doidão  ")
    }  }
  return (
    <div className='corpo-conteiner'>
        <Titulo/>
        <Titulo2 texto={"Primerio Parte"} emoji={"👌"}/>
        <Texto texto={"Texto para enviar componente via props"}/>
        <Titulo2 texto={"Segunda Parte"}  emoji={"😎"}/>
        <Textao texto={"Texto gigate que fala sobre a vida de um rei que viveu anos atrás no reino de textão e agra me diga cadê o texto?"}/>
        <img src="public/imagens/images.png" alt="" className='imagem-corpo'/>
        <button onClick={Login}>Login</button>
    </div>
  )
}

export default Corpo