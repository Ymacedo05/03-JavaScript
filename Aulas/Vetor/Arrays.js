
// FORMAS DE CRIAÇÃO

var vetor = []

vetor[1] = 10
vetor[2] = 9


var vetor = Array()

vetor[1] = 10
vetor[2] = 9

var vetor =  [0, 1, 2]

var vetor = Array(1, 2, 3)

//   ===============  FORMAS DE INCLUSÃO  ===============
/*
    push() > inclui no final 
    unshift() > inclui no inicio 
*/

var novo = ["manga"]
novo.push("uva")
novo.unshift("goiaba")

console.log(novo)
//imprime : [ 'goiaba', 'manga', 'uva' ]




//  ===============  FORMAS DE EXCLUSÃO  ===============
/*
    pop() > exclui no final 
    shift() > exclui no inicio 
*/

var novo = ["manga"]
novo.push("uva")
novo.unshift("goiaba")

novo.pop()
novo.shift()

console.log(novo)


// =====================  length em Array ===============

/*
Tomar cuidado com length em Arrays, pois se atribuido valores a posições fora da ordem o comando levará em consideração os espaços vazios e caso os indices não sejam númericos o comenado length não contabilizará a quantidade:
 
*/

var vetor2 = []

vetor2[6]= 5
vetor2[7]= 2

// vai imprimir o valor 8, pois 6 itens não foram declarados mas, existem. 

console.log(vetor2)
console.log(vetor2.length)
console.log(vetor2[1])


// ===============  ARRAY MULTIDIMENSIONAL ===============
// De forma resumida, são arrays dentro de arrays. 

var vetor = []
vetor["frutas"] = []
vetor["pessoas"] = []

vetor["frutas"][0] = "Laranja"
vetor["frutas"][1] = "Banana"
vetor["frutas"][2] = "Melância"

vetor["pessoas"] = ["Igor", "Felipe", "Thiago"]


vetor["frutas"].push('Manga')
vetor["frutas"].unshift('Melão')

vetor['frutas'].pop()

console.log(vetor)
console.log(vetor["pessoas"])


//  ===========  MÉTODOS DE PESQUISA =====================
// indexOF > informa a posição do elemento buscado no array e retorna -1 caso ele não esteja na lista. Maiuscula faz diferença.

var mangas = ["Naruto", "Nanatsu", "Noragami", "Mirai Nikki"]
console.log(mangas.indexOf("noragami"))

function procurar(n){
    var x = mangas.indexOf(n)
    if(x == -1){
        console.log("O item informado não está na lista.")
    } else{
        console.log("O item " + n + " encontra-se na posição " + x)
    }
}

procurar("Naruto")



//  ===========  ORDENAÇÃO =====================

var numeros = [ 1, 5, 2, 9, 3]
var letras = ['c', 'e', 'a', 'b']

console.log(numeros)
console.log(letras.sort())

console.log(numeros.sort(ordenaNumeros)) // função usada como referência

function ordenaNumeros(a,b) {
    return a - b
    // < 0  = a é ordenado antes de b
    // > 0 = b é ordenado antes de a
    // == a ordem é mantida
}