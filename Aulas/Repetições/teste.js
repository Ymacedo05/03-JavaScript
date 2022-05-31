// EXIBIÇÃO DE ARRAY

var vetor = [6, 2, 3, 5, 1]
vetor.sort(a)

function a(a,b) {
    return a - b
}

for (var c = 0; c < vetor.length; c++){
    console.log( vetor[c])
}


// SOMA DE VETOR 

var vetor = [2, 2, 2]
var total = null

for (var c = 0; c < vetor.length; c++) {
    total += vetor[c] 
}

console.log(total)



// TABUADA 

var num = 1

for (c = 0; c < 11; c++ ){
    var resul = num * c
    console.log( num + " X " + c + " = " + resul )
}


for (c = 0; c < 11; c++ ){

    for (var x = 0; x < 11; x++){

    var resul = x * c
    console.log( c + " X " + x + " = " + resul )

    }
}

/* ======================================================
 */

var vetor = [1,2,3,4,5,10]

for(var c = 0; c < vetor.length; c++){
    console.log('Na posição: ' + c + ' Temos o valor: ' + vetor[c])
}


var num = 1
var c = 0

while( c < 11) {
    console.log(num + 'X' + c + '='+ (num * c))
    c++
}

//===


var c = 1

while( c <= 10) {
    var num = 1
    while(num <= 10){
        console.log(c + 'X' + num + '='+ (c * num))
        num++
    }  
    c ++ 
}





