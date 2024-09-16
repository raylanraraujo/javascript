function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (txtn.value.length == 0){
        alert('Erro. Insira um número')
    }else {
        tab.innerHTML = ''
        let n = Number(txtn.value)
        var c = 1
        while (c<=10) {
            //Para adicionar elementos dentro do select do HTML eu tenho que criar options
            let item = document.createElement('option')

            // Para fazer com que em cada opção apareça a conta da tabuada. Não precisa criar uma variável para fazer a conta
            item.text += `${n} x ${c} = ${n*c}`

            // para criar os valores "values" de cada option, é preciso criar um comando assim. Para outras linguagens é de grande utilidade apesar de 
            item.value = `tab${c}`

            tab.appendChild (item)
            c++
        }
    }
}