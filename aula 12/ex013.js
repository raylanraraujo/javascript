var agora = new Date()
var diaSem = agora.getDay()

diaSem = 8
/*
dias da semana no JavaScript

    0 - Domingo
    1 - Segunda 
    2 - Terça
    3 - Quarta 
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/

//Quando eu executo o comando abaixo ele vai me mostrar um número referente ao dia da semana
console.log(diaSem)

// assim podemos criar um comando que avalie o resultado e me retorne com o nome que eu desejar. No último (defaul - que nesse caso nem era tão preciso assim) é opcional o uso do break.

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log ('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6: 
        console.log('Sábado')
        break
    default:
        console.log('[Erro] Dia inválido!')
}