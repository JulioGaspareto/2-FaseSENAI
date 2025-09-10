import './Corpo.css'
import Texto from './Texto'
import Textao from './Textao'
import Subtitulo from './Subtitulo'
function Corpo() {
  function boraLogar(){
    let usuario =prompt("Digite seu nome de usuario:")
    if (usuario == "adm123"){
      alert("Logado com sucesso")
    }else{ alert("errou,o usuario era adm123")}
  }
  return (
    <div className='corpo-container'>       
    <Texto oTexto={"to colocando o texto aqui"}/>
    <Subtitulo testando={"O Mundo é Nosso"} emoji={"🙌"}/>
    <Textao tecao={"Homem negro, inferno branco, tipo Tarantino Homem branco, inferno banto, tipo tá tirano Os menor tá desesperado, tipo atirando Eu querendo salvar o mundo, ela pergunta: Tá zuando? É que as ruas me lembram Massacre da Serra Elétrica Eles tentam roubar, é o massacre da cerca elétrica E o rap preocupa com povo ou preocupa com a métrica Mas os tentáculos do polvo é o que vai te afundar E o olho que me julga precisa fazer regime Ou algum de nós dois vai estar lá na cena do crime E eu só querendo eu e minha mina na fila do cine Vendo o filme da minha vitória Sou da sua raça, mano, é a nossa vitória Já foram farsa, vamo, contar nossa história Quilombos, favelas, no futuro seremos reis, Charles Seremos a negra mais linda desse baile, charme A negra velha mais sábia, crianças a chave Eles são cadeado, já foram corrente, sabe? O lado negro da força, mato com meu sabre Te corto com meu sabre Como se fosse a noite, cê vê tudo preto Como fosse um blackout, cê vê tudo preto São meus manos, minhas minas Meus irmãos, minhas irmãs, yeah O mundo é nosso, hã Tipo a noite, cê vê tudo preto Tipo um blackout, cê vê tudo preto São cantos de esquinas, de reis e rainhas Yeah, o mundo é nosso Já disse, pretos no topo, e eu falava sério Tipo BK, me veja como exemplo Minha quebrada na merda, minha city fora do mapa, mano Pros meus irmão eu sou exemplo, não nasci branco Para ser franco, não nasci banco Mesmo assim a Paty quer sentar Sou elétrico, tenho em mim a resistência Sou DV Afrotribo pondo fim na concorrência Ganhar dinheiro tipo Cassino de Scorsese Gastar dinheiro tipo Até Que a Sorte Nos Separe Manos se drogam, pensam: Até que a morte nos ampare E a bola de cristal do boy é a taça de Campari E o morro chora, desespero e ainda tem barro lá Prefeito diz: Senhor é meu pastor, mas nada te asfaltará Tudo te faltará, se comprometerá Pra consumir doses de alegria, e não pagará É o Homem na Estrada de todo dia E sabe a resposta, o que é clara e salgada Os mais novo vive queimando largada Não sabe ler nem escrever e sabe o nome da delegada Sejamos Abraham Lincoln, independência Com a pele de Barack Obama Sejamos Tupac Shakur, Afeni Shakur Achemos a cura pra nossa insegurança Cada bala de fuzil é uma lágrima de Oxalá Mas na rua né não, na mão dos cana né não Na cintura era um celular e eles confundem com um oitão Como se fosse a noite, cê vê tudo preto Como fosse um blackout, cê vê tudo preto São meus manos, minhas minas Meus irmãos, minhas irmãs, yeah O mundo é nosso, hã Tipo a noite, cê vê tudo preto Tipo um blackout, cê vê tudo preto São cantos de esquinas, de reis e rainhas Yeah, o mundo é nosso"}/>
    <img src="./imagens/miojinho.jpg" alt="" className='imagem-corpo' />
    <button onClick={boraLogar}>Logat</button>
    </div>
  )
}

export default Corpo