import React from 'react'
import './Conversor.css'

function Conversor() {
  return (
    
    <div className='conversor-conteiner'>
        <h3>Conversor de Temperatura</h3>
        <label htmlFor="">Qual A Temperatura?</label>
        <input type="number" />
        <h3>Ela Está Em:</h3>
        <button>Celsiuns</button>
        <button>Fahrenheit</button>
        <button>Kelvin</button>
        <h3>Converta Em:</h3>
        <button>Celsiuns</button>
        <button>Fahrenheit</button>
        <button>Kelvin</button>


      
    </div>
  )
}

export default Conversor
