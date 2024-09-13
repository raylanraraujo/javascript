function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){   //condiçao para que caso o campo esteja vazio ou o valor inserido seja maior que o ano atual
         window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        var img = document.createElement('img') // vai criar uma tag img para mim

        img.setAttribute('id', 'foto') // Como se tivesse criando no documento HTML uma linha assim "<img id='foto'>"

        if (fsex[0].checked) { // se o que tiver sido marcado na parte de sexo for a posiçao 0 (masculino)
            genero = 'Homem'
            if (idade>=0 && idade <5){
                //bebe
                img.setAttribute('src','imagens/bebehomem.png')           
            } else if (idade <=12) {
               //crianca
                img.setAttribute('src','imagens/criancahomem.png') 
            } else if (idade <= 29 ) {
                //adolescente
                img.setAttribute('src', 'imagens/adolescentehomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','imagens/adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/idosohomem.png')
            }
        } else {  // nessa linha também poderia colocar assim --> } else if{ (fsex[1].checked){...
            genero = 'Mulher'
            if (idade>=0 && idade <5){
                //bebe
                img.setAttribute('src','imagens/bebemulher.png')
            } else if (idade <=12) {
                //crianca
                 img.setAttribute('src','imagens/criancamulher.png') 
            } else if (idade <= 29 ) {
                //adolescente
                img.setAttribute('src','imagens/adolescentemulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','imagens/adultomulher.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/idosamulher.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center' // centralizando o texto através do JS em vez de CSS
        res.appendChild(img)// para fazer aparecer a foto no resultado
    } 
}
      
