// Estruruta de repetição com teste lógico no inicio. While = Enquanto


console.log("Olá, Mundo!")
var c = 1
while (c <=3) {
    console.log("Olá, Mundo!")
    c ++
}

var c = 1
while (c <= 5) {

    if (c == 3) {
        break
    }
    console.log(c)
    c++

// o comando break faz a repetição parar naquele ponto.
}

var c = 1
while (c <= 5) {
    console.log(c)
    c++

    if (c == 3) {
        continue
    }

// o comando continue faz com o interpretador pule a letura do código abaixo da palavra continue e retorne a repetição. Caso o c++ seja informado abaixo do continue isso pode gerar um loop infinito.  
}

//--------------------------------
/*
Estruruta de repetição com teste lógico no final. 
-Do = Faça 
*/


var c = 1
 do {
    console.log(`Testando ${c}`)
    c ++
}while (c <=2)


//-----------------------------------

for ( var d = 1  ; d <=3  ; d++ ){
    console.log(`Testando ${d}`)
}

// 1º parte = inicialização  2º = teste lógico  3º = incremento


//=========================================
//  FOR IN > estrutura de repetição para vetor.

var vetor = [3,5,4]
vetor['a'] = 10
for (var c in vetor ) {
    console.log(' Na posição ' + c + ' temos o valor ' + vetor[c])
}



//Difrente das demais estruturas de repetição, o FOR IN atribuí o indice do vetor a variavel declarada podendo ser qualquer tipo de valor.  


//================ FOR EACH ======================
/*
1. podemos não especificar os 3 parametos dentro da função e informar somente o que precisamos, como valor.

2. podemos incluir uma variavel já com a função para facilitar a nossa interpretação.

3. atua somente com indices númericos a partir de 0

*/


var animes = ['Naruto', 'Death note', 'Gingeki no kyojin', 'Nanatsu no taizai']

console.log(animes)

animes.forEach(function(valor, indice, array){
    console.log('Indice ' + indice + '| Valor: ' + valor)
    
    if( valor == 'Death note'){
        animes[indice] = 'Um novo valor'
    }
})

console.log(animes)


//2.

var animes = ['Naruto', 'Death note', 'Gingeki no kyojin', 'Nanatsu no taizai']

var f = function(valor, indice){
    console.log(valor, indice )
}

animes.forEach(f)