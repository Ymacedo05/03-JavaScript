function clicar (){
    document.body.style.background= "Black"
    document.body.style.color= "Magenta"
}
//===========================================

function clicar2(){
var i1 = document.getElementById("n1")
var n1 = Number(i1.value)
var sel = document.getElementById("sel")

if (n1 == 0){
    alert("[Erro] Por favor informar um número para prosseguir.")
}else {
    
    var c = 1
    sel.innerHTML=''
    while (c <= 10) {
        
        var oli = document.createElement("option")
        oli.text = `${n1} X ${c} = ${n1*c} `
        sel.appendChild(oli)
        c++

    }
}
}