import React, { useState } from 'react'
import './Aviso.css'

function Aviso() {
    const[mostraAviso, setMostrarAviso] = useState(false)

  return (
    <div className='aviso-conteiner'>
        <button onClick={() => setMostrarAviso(true)}>Aviso Importante</button>

        {mostraAviso && ( <p>Celulares e jogos são proibidos no laboratório. 
            Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.</p> )
        
        }
    </div>
  )
}

export default Aviso
