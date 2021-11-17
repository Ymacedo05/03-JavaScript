var vetor = [2,6,7,3,10]
console.log(vetor)
var ym = function(a,b){
if (a > b) return 1
if (a <b ) return -1
return 0
}

vetor.sort(ym)
console.log(vetor)

console.log(vetor.indexOf(4))
var x = 4

if (vetor.indexOf(x) == -1){
    console.log("Valor não localizado")
}else { console.log(`Identificado valor na posição ${vetor.indexOf(x)}`)}
