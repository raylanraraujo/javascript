// criar um objeto
let amigo = {}
console.log(typeof amigo)

//criar um array
let telefone = []
console.log(typeof telefone)

//Ambas variáveis são consideradas do tipo 'objeto'pelo JS

let amiga = { nome: 'Débora',  // Foi colocado em cada linha para facilitar a criação.
    sexo:'F', 
    peso: 60,
    engordar(p=0){
        console.log('Engordou') //
        this.peso += p //
    }
} 
console.log(amiga) // quando executa, ele mostra o objeto ainda mais a função
console.log(amiga.nome) // em vez de querer que mostre tudo, eu solicito que mostre apenas o nome da amiga
console.log(`${amiga.nome} pesa ${amiga.peso} kg`)

amiga.engordar(2)
console.log(`${amiga.nome} pesa ${amiga.peso} kg`)