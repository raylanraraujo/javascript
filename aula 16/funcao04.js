// Calcular o fatorial de um número. 
//5! é a mesma coisa que 5*4*3*2*1

// a function abaixo recebe um número e vai retornar o fatorial desse número
function fatorial (n){
    let fat = 1
    for (let c = n; c>0; c--){ //cria se um contador que começa em 'n' e enquanto ele for maior que zero (poderia ser maior que 1 também) ele vai perdendo 1
        fat *= c
    }
    return fat
}
console.log(fatorial(5))