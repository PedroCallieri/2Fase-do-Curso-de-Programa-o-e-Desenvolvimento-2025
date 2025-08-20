import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-conteiner'>  
        <a href="">
          <img src="./imagens/home 2.svg" alt="" />
          Home
          </a>
        <a href="">
          <img src="./imagens/cadastros.svg" alt="" />
          Contato
          </a>
        <a href="">
          <img src="./imagens/contato.svg" alt="" />
          Dashboard
          </a>
    </div>
  )
}

export default Navbar