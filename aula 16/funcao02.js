function som(n1, n2) {
    return n1 + n2
}

console.log(som(3, 7))

//entretanto, eu preciso colocar no parâmetro da função que n1 e n2 recebe 0, para que ,caso eu especifique apenas um número ele me dê o valor dele me vez de NaN

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(3))

//mudei os nomes para que no console aparecesse as três possibilidade
function somar(n1=0, n2=0) {
    return n1 + n2
}

console.log(somar(7))