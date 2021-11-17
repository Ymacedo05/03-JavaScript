// dois tipos de funções:
//===========================================
//01 - Função com retorno ;

function somarValores(a,b){
    return a + b 
}
console.log(somarValores(2,5))


//02 - Função sem retonro :

function somarValores2(a,b){
    console.log(a+b)
}
somarValores2(10,5)

//====================================================
function teste01(a,b){
    console.log(a+b)
}

teste01(10)  // imprime: Não é um número, visto que o outro valor não foi passado.
teste01(0,2) // soma normal
teste01(1,2,3) // soma os dois prmeiros e ignora os demais.

// EXISTE A POSSIBILIDADE DE JÁ PASSAR UM VALOR OU PASSAR CASO O MESMO NÃO SEJA INFROMARDO:
 function teste02(a,b=1){
     console.log(a+b)
 }

 teste02(3,5) // resulta em 8 (b=1 só é aplicado quando o b não é informado.)
 teste02(3) // resulta em 4, por causa do 1 préviamente informado.
 teste02("uva","goiaba") // concatena 
 