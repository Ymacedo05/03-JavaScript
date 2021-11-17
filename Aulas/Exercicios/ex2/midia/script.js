function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 ||Number(fano.value) > ano){
        window.alert("ERRO")
    }else{
        var fsex  = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
// IMPORTANTE ************ INSERÇÃO DE IMAGEM
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')
// IMPORTANTE ************ INSERÇÃO DE IMAGEM

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >=0 && idade <10) {
                //criaça
                img.setAttribute('src', 'CM.jpg')
            } else if (idade <23) {
                //jovem
                img.setAttribute("src", "JM.jpg" )
            } else if (idade <50) {
                // adulto
                img.setAttribute("src","a_m.jpg")
            } else {
                //idoso
                img.setAttribute("src", "vh.jpg")
            }


        }else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >=0 && idade <10) {
                //criaça
                img.setAttribute("src", "CF.jpg")
            } else if (idade <23) {
                //jovem
                img.setAttribute("src", "JF.jpg")
            } else if (idade <50) {
                // adulto
                img.setAttribute("src", "a_f.jpg")
            } else {
                //idoso
                img.setAttribute("src", "vm.jpg")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
        
    }





