import { useContext } from "react"
import Navbar from "../components/Navbar"
import { GlobalContext } from "../contexts/GlobalContext"


function Produtos() {

    const{produto ,setProduto, produtos} = useContext(GlobalContext)

    function trocarProdutos(){
        let novo = prompt("novo nome:")
        setProduto(novo)
    }

  return (
    <div className="navbarTop">
        <Navbar/>
        <h1>Produtos </h1>
        produtos,produtos,produtos, {produto},{produtos[0].nome}, {produtos[1].nome}
        <button onClick={trocarProdutos}>Trocar</button>
    </div>
  )
}

export default Produtos