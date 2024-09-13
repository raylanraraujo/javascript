function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >=0 && hora < 12){
        img.src = 'imagens/manha.png'
        window.document.body.style.background = '#ffcf79'
    } else if (hora >=12 && hora <19){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#c7c4cb'
    } else {
        img.src = 'imagens/noite.png'
        window.document.body.style.background = '#2c3f39'
    }

}
