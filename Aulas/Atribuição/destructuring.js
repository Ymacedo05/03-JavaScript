//Novo recuso do ES2015 - Permite extrair dados e os armazena em uma variavel. 
// Tentar extrair um item que não existe resultará no ERRO : Undefined
//Tentar extrair um item  já extraido sultará no ERRO : Has already been declared

let pessoa = {
    Nome: 'Ana',
    Idade: 13,
    Endereço: {
        Logradouro: 'Rua ABC',
        Número: 1408
    },
    Altura: 1.56,
    Peso: 57,
    Cor: 'Azul',
    Filme: 'O chamado'

}

const {Nome, Idade} = pessoa
console.log(Nome,Idade)

const {Endereço: {Logradouro,Número}}= pessoa
console.log (Logradouro,Número)

let {Peso,Altura} = pessoa
console.log(Peso,Altura)


const {Peso:a, Altura:b} = pessoa  // Extração de dados com personalização de nome. 
console.log(a,b)

const {Local, Filme, Cor} = pessoa
console.log(Local ,Filme, Cor)





