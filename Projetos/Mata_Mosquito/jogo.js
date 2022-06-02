
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){ 

     altura = window.innerHeight // informa a altura da pagina
     largura = window.innerWidth // informa a largura da pagina

    console.log('Largura: ' + largura + ', Altura: '+  altura)

}

ajustaTamanhoPalcoJogo()

var posicaoX = Math.round(Math.random() * largura) - 90
var posicaoY = Math.round(Math.random() * altura) - 90

posicaoX = posicaoX < 0? 0 : posicaoX
posicaoY = posicaoY < 0? 0 : posicaoY

console.log('Left (largura): ' + posicaoX + ', Top: (altura)'+ posicaoY)


//criar o elemento html e atribuir as posições aleaórias ao elemento

var mosquito = document.createElement('img') //cria uma tag html
mosquito.src = "imagens/mosca.png" // atruimos um atrubuto
mosquito.className = 'mosquito1'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)