import './NavBar.css'
function navBar() {
  return (
    <div className='navbar-container'>
        <a href="">
          <img src="./imagens/icon_home.svg" alt="" />
          <br />
          home
          </a>
        <a href="">
          <img src="./imagens/icon_perfil.svg" alt="" />
          <br />
          perfil
          </a>
        <a href="">
          <img src="./imagens/icon_contato.svg" alt="" />
          <br />
          contato
          </a>
    </div>
  )
}

export default navBar