
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){ 

     altura = window.innerHeight // informa a altura da pagina
     largura = window.innerWidth // informa a largura da pagina


}

ajustaTamanhoPalcoJogo()
posicaoRandomica()


function posicaoRandomica() {

    if(document.getElementById('mosq')) {
        document.getElementById('mosq').remove()
    }

    var posicaoX = Math.round(Math.random() * largura) - 90
    var posicaoY = Math.round(Math.random() * altura) - 90

    posicaoX = posicaoX < 0? 0 : posicaoX
    posicaoY = posicaoY < 0? 0 : posicaoY

    console.log('Left (largura): ' + posicaoX + ', Top: (altura)'+ posicaoY)


    //criar o elemento html e atribuir as posições aleaórias ao elemento

    var mosquito = document.createElement('img') //cria uma tag html
    mosquito.src = "imagens/mosca.png" // atruimos um atrubuto
    mosquito.id = 'mosq'
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}

//alterando o tamanho > criamos um gerador de classes que atruí as mesmas direto no elemento criado (img)

function tamanhoAleatorio(){

    var classe = Math.floor(Math.random()*3)

    switch (classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'
        
        case 2:
            return 'mosquito3'
    }
    
}


function ladoAleatorio(){

    var classe = Math.floor(Math.random()*2)

    switch (classe) {
        case 0:
            return 'ladoA'
        
        case 1:
            return 'ladoB'
    }
}

