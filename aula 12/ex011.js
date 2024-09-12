var idade = 66
console.log(`Você tem ${idade} anos.`)

if (idade <16) {
    console.log('Não vota')
} else {
    if (/*idade>=16 &&*/ idade <18 || idade > 65){          // "idade>=16 &&" é desnecessário pois se a idade nao é menor que 16 é obvio que ela é maior ou igual
        console.log ('Voto opcional')
    } else {
        console.log ('Voto obrigatório')
    }
    
}