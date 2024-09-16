function gerar(){
    var num = document.querySelector('input#inum')
    var res = document.querySelector('div#res')
    var n = Number(num.value)
    res.innerHTML = ''

    if (inum.value.length == 0){
        res.innerHTML = `<p>[ERRO] <br> Por favor insira um número! </p>`

    } else {
        for (c=1; c<=10; c++) {
        var r = c*n
        res.innerHTML += `<p>${n} x ${c} = ${r}</p>` 
        }
    }
   
    
} 