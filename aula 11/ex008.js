//atalho para executar a extensão Node Exec é a tecla f8

//para poder escrever algo no console, deve-se usar o comando abaixo
console.log ('O console funcionou corretamente!')

//criando uma variável de velocidade
var vel = 70


// usado crases dentro do comando para interpolar o texto com as variáveis. Nesse exemplo abaixo, os comandos vão seguir sempre a sequencia de execução e todos vão executar. Mesmo que a pessoa esteja com uma velocidade baixa ela apareceria que seria multada.
    //console.log(`A velocidade do seu carro é ${vel} km/h`)
    //console.log('Você ultrapassou a velocidade permitida. MULTADO!')
    //console.log('Dirija sempre usando o cinto de sgurança!')
//

console.log(`A velocidade do seu carro é ${vel} km/h`)
//condição simples que tem apenas uma condição dentro do bloco e caso a condição é verdadeira o programa vai fazer o comando. 
if(vel > 60) {
    console.log('Você ultrapassou a velocidade permitida. MULTADO!')
}
console.log('Dirija sempre usando o cinto de sgurança!')