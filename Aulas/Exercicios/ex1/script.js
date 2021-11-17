function carregar(){
var i = window.document.getElementById('msg')
var i2 = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora <12){
    img.src = 'manhã.png'
    document.body.style.background= '#ddc873'
} else if (hora <18){
    img.src = 'tarde.png'
    document.body.style.background= '#e07918'
} else {
    img.src = 'noite.png'
    document.body.style.background= '#0d3152'
}
}