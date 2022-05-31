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