var a = {
    Nome: 'Larissa'
}
var b = {
    Idade: 27
}
var Cor = 'Rosa'
var c = 'Teste'
var d = 'Bicho'
var e = {
    ...a, // atalho para junção de elementos de um objeto, lembrando que os dados aqui apresentados, não são os originais e sim uma copia do que tinha no momento da junção, ou seja, qualquer alteração feita nos objetos a e b após a junção não constará em e. 
    ...b,
    Sexo: 'Feminino',
    Caracteristica: 'Linda',
    Cor,
    Experimento: c,
    [d]: 'Morticia' // Para usar o valor de uma variavel como titulo de um Objeto basta acrescentar colchetes.

}

console.log(e)
// ==================================1========================================================

