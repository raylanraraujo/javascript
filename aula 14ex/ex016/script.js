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

  if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    res.innerHTML = 'Impossível de contar.'
  } 
  
  else {
    res.innerHTML = 'Contando...'

    if (npas <= 0) {
      alert('Impossível de contar')
      p = 1
    }

    if (nini < nfim) {
      for (c = nini; c <= nfim; c += npas)
      res.innerHTML += ` ${c} `
    } 

    else {
      for (c = nini; c>=nfim; c -= npas)
      res.innerHTML += ` ${c} `
    }
    

  }

 

  /*
  if (ini.value.length == 0) {
    res.innerHTML = 'Impossível contar. Insira um número para iniciar!'
  } else{
    for (let c = nini; c <= nfim; c += npas) {
      res.innerHTML += `${c} &#9755;`;
    }
  }
*/
 
} 
