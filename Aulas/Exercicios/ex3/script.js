function clicar(){
    let i1 = document.getElementById("n1")
    let i2 = document.getElementById("n2")
    let i3 = document.getElementById("n3")
    //let res = document.getElementById("res")
//-----------------------------------

    var inicio = Number(i1.value)
    var fim = Number(i2.value)
    var passo = Number(i3.value)
//----------------------------------

    if(inicio == 0 || fim == 0){
        alert("[ERRO] Por favor, revise os dados informados.")
    
    }else {
        var res = document.getElementById("alter")
        res.innerHTML= "Contando:<br>"
        if (passo ==0){
            alert("[ERRO] Passo inválido. Considerando Passo = 1.")
            var passo = 1
        }
        }
        
        

        if (inicio <= fim){
            
            for (var contador = inicio;contador <= fim; contador += passo){
            res.innerHTML+= `👉${contador} `}
    
            
        }else {
            for (var contador = inicio; contador >= fim; contador -= passo){
                res.innerHTML+= `👉${contador} `}
                
        }
        res.innerHTML+= "🏁😈"
            
       
    
}