function contar() {
    //criei a variável de cada elemento dos inputs
    var ini = window.document.querySelector('input#txtini')
    var fim = window.document.querySelector('input#txtfim')
    var pas = window.document.querySelector('input#txtpas')
    var res = window.document.querySelector('div#res')

    //converti os dados dos inputs em números para os cálculos
    var nini = Number(ini.value)
    var nfim = Number(fim.value)
    var npas = Number(pas.value)
    res.innerHTML = '';

  
    
    for (let c = nini; c <= nfim; c += npas) {
        res.innerHTML += `${c} &#9755;`;
      }

    res.innerHTML = `A contagem inciando em ${ini.value} com um intervalo de ${pas.value} e terminando em ${fim.value} é: <br> ${cont}`
}
