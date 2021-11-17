var painel = document.getElementById("sel")
var vetor = []

function adicionar(){
    var n = document.getElementById("n1")
    var n1 = Number(n.value)
    

    if (n.value.length == 0 || n1 > 100 || vetor.indexOf(n1) != -1) {
    alert("[ERRO] Valor incorreto ou já inserido.")

    }else {
        var criado = document.createElement("option")
        criado.text = `Valor ${n1} adicionado.`
        painel.appendChild(criado)
        vetor.push(n1)
    }

}

function finalizar(){

    if (vetor.length == 0 ){
        alert("[ERRO] Por favor adicionar números para finalizar.")
    } else{
    //painel.innerHTML = " "
    /*var res = document.getElementById("res")
    var criado2 = document.createElement("p")
    criado2.text = `Ao todo temos números cadastrados.`
    res.appendChild(criado2)*/
    
    var res = document.getElementById("res")
    //-----------------------------------------
    var final = vetor.length
    var finalC = final - 1
    //----------------soma dos valores--------------

    var soma = 0
    for (var y = 0;y <vetor.length; y++){
        soma+= vetor[y]
    }
    var media = (soma/final).toFixed(1)
    



    res.innerHTML= `- Ao todo temos ${final} número[s] cadastrados.`
    res.innerHTML+= `- O maior valor informado foi  ${vetor[finalC]}.`
    res.innerHTML+= `- O menor valor informado foi  ${vetor[0]}.`
    res.innerHTML+= `- Somando todos os valores temos ${soma}.`
    res.innerHTML+= `- A média dos valores digitados é ${media}.`
    }
}