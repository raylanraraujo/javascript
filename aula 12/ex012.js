//para pegar a hora atual do sistema

//cria uma variável que sempre será new Date
var agora = new Date()

// depois na variável hora voce coloca o camndo de getHours
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora <12) {
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
