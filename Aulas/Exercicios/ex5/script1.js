var num  = document.querySelector("input#n1")
var lista = document.querySelector("select#sel")
var res = document.querySelector("div#res")
var vetor = []


function valiNum(n){
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function valiVetor(n,y){
    if (n.indexOf(Number(y)) != -1){ // -1 =  retornado pelo idexOf quando o valor não é localizado no vetor || != -1 = o oposto que -1, ou seja, será verdadeiro se o valor for localizado no vetor. 
        return true
    }else {
        return false
    }
}

function valiVetor2(n) {
    if (vetor.length == 0){
        return true
    }else {
        return false
    }
}
// vc cria os validadores dentro de funções e as chama quando o botão for acionado. 

//=================================================================
function adicionar() {
    if (valiNum (num.value) && !valiVetor(vetor,num.value)) {
        vetor.push(Number(num.value))
        var option = document.createElement("option")
        option.text = `Valor ${num.value} Adicionado.`
        lista.appendChild(option)
        res.innerHTML = ''


    }else {
        alert("[ERRO] Valor invalido ou já encontrado na lista")
    }
    num.value= ""
    num.focus() // novo 
} 

//==================================================================
function finalizar() {
    if (!valiVetor2(vetor)){
        var total = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0
        
        


        for (var c = 0; c < vetor.length; c++){
            soma += vetor[c]
            if ( vetor[c] > maior)
                maior = vetor[c]
            if ( vetor[c] < menor)
                menor = vetor[c]

        }   
        media = soma / total 

        res.innerHTML = ""
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados. </p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores informados é ${media}</p>`
        //res.innerHTML += `<p></p>`






    }else {
        alert("Adicione valores antes de finalizar.")
    }
}