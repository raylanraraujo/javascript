function gerar(){
    var num = document.querySelector('input#inum')
    var tab = document.querySelector('select#itab')
    var res = document.getElementById('res')
    

    if (inum.value.length == 0){
        alert('[ERRO] Por favor insira um número!')
        
    } else {
        tab.innerHTML = ''
        var n = Number(num.value)
        var c = 1
       
        while (c<=10){
        var item = document.createElement('option') //cria novo option

        item.value = `tab${c}` // define o atributo "value" ao elemento option  para o valor atual de c (importante para o PHP)

        item.text += `${n} x ${c} = ${n*c}` //define o conteúdo de texto do elemento option 
        
        tab.appendChild(item) // acrescenta o elemento option recém criado como um filho de tab

        c++ //incrementa a variável em 1
        }
    }
     
     
} 