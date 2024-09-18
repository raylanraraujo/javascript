let numero = document.getElementById('inum')
let tab = document.getElementById('itab')
let 

function adicionar() {
    let n = Number(inum.value)
    if (numero.value.length == 0 || n < 0 || n > 100 ){
        alert("Insira um número válido")
    } else {
        /*alert('tudo ok')*/
        for (var c = 1 ; c < 2 ; c++){
            let valor = document.createElement('option')
            valor.text = `O número ${n} foi adicionado.`
            valor.value += `tab${c}`
            tab.appendChild(valor)  
        }
        
    }
   
}

function finalizar(){
    let add = document.getElementById('option')
    res.innerHTML = `O valor adicionado foi ${add}`

}