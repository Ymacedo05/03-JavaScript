var agora = new Date() // pegar infromações de data e hora atuais
var hora = agora.getHours() // delimitação para horas
console.log(`Agora são ${hora} horas.`)
if(hora >=1 && hora <6){
    console.log('Boa madrugada!!')
} else if (hora >5 && hora <12){
    console.log('Bom dia!')
}else if (hora <18){
    console.log('Boa tarde!!')
} else {
    console.log('Boa Noite!')
}
