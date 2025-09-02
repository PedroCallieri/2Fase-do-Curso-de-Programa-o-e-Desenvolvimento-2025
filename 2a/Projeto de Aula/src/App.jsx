import { useState } from 'react'
import './App.css'

function App() {
  const [numero, setNumero] = useState(0)
  const [userName, setUserName] = useState()

  function adicionar () {
    setNumero(numero + 1)
  }
  function subtrair () {
    setNumero(numero - 1)
  }
  function logar () {
    let nome = prompt("Digite seu nome:")
    setUserName(nome)

  }

  return (
    <>
    {/* {userName && <p>render condicional</p>} */}
    {userName &&
    <p className='user'>
      Olá {userName}</p>}
    <button onClick={logar}>logar</button>
     <h1>Estado</h1>
     <button onClick={subtrair}>-</button>
     {numero}
     <button onClick={adicionar}>+</button>

    </>
  )
}

export default App
