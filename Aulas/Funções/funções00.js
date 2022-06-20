// Metódo para trabalhar com argumentos infinitos em funções.

// arguments > é um objeto que representa todas as variaveis locais dentro das funções em js. 

// somará os numbers informados e concatenará as strings

function soma(){
    var resultado = 0
    for( var c in arguments){
       resultado += arguments[c]
    }

    return resultado
}

console.log (soma(2, 2, 3, 2, 5, 5, 6, 7, 7, ' lala ', 'Larissa'))


//================================

// Podemos atribuir o valor as variaveis caso as mesmas não recebeam informações na chamada da funções. Alem disso, podemos atribuir diretamente o undfined como um dos valores 


function lab(nome = "polar", altura = 1.90){
    console.log(`Era uma vez um urso chamado ${nome}, ele tihnha ${altura}M de altura.`)
}

lab(undefined, 2)

