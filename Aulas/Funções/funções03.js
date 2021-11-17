// Existe a possibilidade de armazenar uma função em uma variavel. 

var soma = function (a,b = 1){
    console.log(a+b)
}
soma(10,5) // retorna: 15

//====== Arrow Function ========================================

const soma02 = (a=2,b=1) => {
    console.log(a+b)
}

soma02(3,5) // retorna: 8
//----------------------------------------

laranja = (a,b) =>{
    console.log(a+b)
}

laranja(3,3) // retorna: 6

//=======================================
// Retonro implicito // retorna sem precisar ser infromado
// OBS: só funciona para uma linha de código.

const impli = (a,b) => a - b  // Obs: Se => estiver separado, da ruim (= >)
console.log(impli(10,10)) // retoorna 0

const impli2 = (a,b ) => console.log(a+b)
impli2(2,2)

const impli3 = a => console.log(a)
impli3("Muahahah")
