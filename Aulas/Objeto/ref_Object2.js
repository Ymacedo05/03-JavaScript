var Ob = {
    Nome: 'Lucas',
    Idade: 35,
    Proffissão: 'Analista',
    Competencias: {
        Linguagens: [ 'Java', 'Java script', 'Python'],
        Hobbies: [ 'Desenhar', 'Lutar', 'Jogar']
    }
}

console.log(Ob)
Ob.Endereço = {
    Rua: 'Gilberto mendes',
    Numero: 386,
    Bairro: 'Barreto',
    Cidade: 'Aruja'
}

console.log(Ob)
console.log('===========================================================')

var N = 'Rosa'
var Hobbie = 'Dançar'
var Ob1 = {
    Nome: 'Thais',
    Idade: 20,
    Cor: N, // podemos acrescentar uma variavel ao objeto dessa forma
    Hobbie // Ou caso tenham o mesmo nome, dessa forma.  
}
 console.log(Ob1)
 console.log('===========================================================')


 var a = {
     Nome: 'Larissa',
     Idade: 27
 }

 var b = {
     Endereço: 'Centro',
     Bicho: 'Morticia'
 }

 /*var Juncao = Object.assign({}, a,b)
 console.log(Juncao)]*/ // forma de criar um objeto novo unificando dois objetos

 Object.assign(a,b) // forma de juntar dois objetos a um deles.
 console.log(a)
 console.log(b)

 console.log('===========================================================')
// forma resumida do comando acima

var c = {
    Nome: 'Tutu',
    Idade: 30
}

var d = {
    Endereço: 'Rua 30',
    Cor: 'Vermelho'
}

var e = {
    ...c,
    ...d
}

console.log(e)
console.log(c)
c.Adicional = 9000

console.log(c)
console.log(e)

console.log('==========================1=================================')

var a1 = {
    Nome: 'Carlos'
}
var a2 = {
    Idade: 78
}

Object.assign(a1,a2)
console.log(a1)

a2.Adicional = 'Teste'
console.log(a1)
 
