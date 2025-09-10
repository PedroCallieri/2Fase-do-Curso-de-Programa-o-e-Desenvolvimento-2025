import React from 'react'
import './Corpo.css'
import Demo from './src/componentes/Demo'
import Aviso from './src/componentes/Aviso'
import Conversor from './src/componentes/Conversor'

function Corpo() {
  return (
    <div className='corpo'>
      <Demo/>
      <Conversor/>
       <Aviso/> 
      
    </div>
  )
}
// #292929
export default Corpo
