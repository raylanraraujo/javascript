let num = []
console.log(`Nosso vetor num é o ${num}.`)
console.log(num)

let nume = [ 5 , 8 , 2 , 9 , 3]
console.log(nume)
console.log(`Nosso vetor nume é ${nume}`)
console.log(`O vetor tem ${nume.length} posições`)
console.log(`Mostre o índice da posição 3 --> ${nume[3]}`)
console.log(`Em ordem crescente dos elementos nós temos ${nume.sort()}`)

nume.push(1)
console.log(nume)
console.log (`O elemento 1 foi adicionado ao vetor após ele ter sido sido organizado em ordem crescente. Por isso quando ele é consultado vemos o elemento 1 no último índice [${nume}]`)

let pos = nume.indexOf(4)
console.log(`O valor 8 está na posição ${pos}`)
console.log('No vetor original o 8 esta na posicão1. Como em seguida os elementos foram organizados com o sort(), o elemento 8 passa a ocupar a posição3 mesmo com o acréscimo do elemento 1 à variável. Caso seja executado um novo comando de sort(), o elemento 8 passaria a ocupar a posição 4 e o elemento 1 a posicão0. Caso não exista o elemento procurado no vetor, o comando .indexOf(n) vai nos dar um valor de -1')

if (pos == -1){
    console.log('O valor pesquisado não foi encontrado.')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
