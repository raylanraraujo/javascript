function parimp(n){
    if (n%2==0){
        return 'par!'
        
    } else {
        return 'ímpar!'
    }
}

// para funcionar é preciso ter a chamada criando uma variável
let res = parimp(4)
console.log(res)

// ou então pode chamar diretamente abaixo
// chamada = o "parimp" 
// parâmetro = o "5"
// retorno = 'ímpar!'
// ação = é o IF completo
console.log(parimp(5))