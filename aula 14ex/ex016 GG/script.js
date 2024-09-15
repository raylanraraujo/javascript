function contar(){
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
        
        
    } else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p<=0) {
            window.alert('Passo inválido!')
            p = 1
        }

        if (i<f){
            // contagem crescente
            for (let c = i; c<=f; c+=p) {
                res.innerHTML += `${c} \u{1F449} ` //Formatação Unicode do emoji para o JS o unicode do emoji U+1F449 deve ser alterado. devendo ser substituído o U+ por \u e o código do ícone entre chaves {}. Só funciona se estiver entre crase  
            }
        } else {
            //contagem decrescente
            for (let c = i; c>=f; c-=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3c1}` //só funciona se colocar entre crases.
    }
}