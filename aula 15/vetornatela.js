let valores = [8,1,7,4,2,9]
console.log(`Foi criado uma variável VALORES com os seguintes elementos: [${valores}]`)

console.log(`Caso se deseje mostrar os valores dos elementos na tela pode se usar o comando console.log(valores[0]) / console.log(valores[1]) / e asssim por diante. Por exemplo:`)

//pode ser apresentado da seguinte maneira
console.log(valores[0])
console.log(valores[1])

console.log(`Entretando se for um vetor com muitos elementos, fica impraticável apresentar dessa maneira na tela. Para isso o mais indicado é utilizar um método de repetição. Dessa maneira, com apenas duas linhas eu consegui que todos os elementos fossem demonstrados na tela. Mas é importante que se saiba a quantidade de elementos do vetor através do atributo .length`)

for (c=0; c<6; c++){
    console.log(`A posição ${c} tem o valor de ${valores[c]}`)
}

console.log('Pode ser também escrito conforme está aqui embaixo usando o FOR e IN. É uma maneira otimizada para variáveis compostas e objetos.')
for (let c in valores) {
    console.log(valores[c])
}