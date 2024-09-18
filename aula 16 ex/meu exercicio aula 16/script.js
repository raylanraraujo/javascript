let numero = document.getElementById('inum')
let res = document.getElementById('finalizar')

numero = 2

function adicionar() {
    let conjunto = []
    conjunto.push(numero.value)
    if (numero.value < 0 || numero.value > 100){
        finalizar.innerHTML = '[Erro] Número inválido!'
    }else {

        finalizar.innerHTML += `Valor ${numero.value} foi adicionado. <p>`
       
    }
    console.log(conjunto)
}