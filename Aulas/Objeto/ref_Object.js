
let Obj = {
    Nome: 'Marcos',
    Idade: 28,
    Prossissão: 'Eletricista',
    "Dado-adicional": 'Opa', // elementos com simbolos precisam de aspas para serem deescritos
    "Tel contato": 5445 // espaços podem ser representados com aspas ou _
}
    
console.log(Obj)
console.log(Obj.Nome)
console.log(Obj['Dado-adicional']) // dependendo de como escreve o elemento é necessário solicitar dessa forma para ser expresso.

Obj.Ano = 2021 // comando para acrescentar dado
console.log(Obj)
console.log(Obj.Ano)

delete Obj.Ano // comando para eexcluir um dado
console.log(Obj)

