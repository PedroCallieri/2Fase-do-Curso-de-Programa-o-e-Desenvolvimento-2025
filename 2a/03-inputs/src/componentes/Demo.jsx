import React, { useState } from 'react'
import './Demo.css'

function Demo() {
    const[inputUsername,setinputUsername] = useState('')
    const[inputSenha,setinputSenha] = useState ('')
    function FacaLogin(){
        alert("Nome: " + inputUsername + ". Pera tu jogou sua senha aqui vacilão? " + inputSenha)
    }
  return (
    <div className='demo_conteiner'>
        <h2>Demo</h2>
        <label htmlFor="">Coloca o Nome Fii</label>
        <input type="text" 
            value={inputUsername}
            onChange={(e) => setinputUsername(e.target.value)}
        />
        <label htmlFor="">Joga uns numeros ae</label>
        <input type="password" 
            value={inputSenha}
            onChange={(Ev) => setinputSenha(Ev.target.value)}
        />
        <button onClick={FacaLogin}>Logar</button>

    </div>
  )
}

export default Demo
