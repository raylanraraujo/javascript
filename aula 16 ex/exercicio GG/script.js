let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')

// criação de um vetor vazio que será usado para a análise de dados
let valores = []

//para fazer a inclusao precisa fazer 2 funções

//o valor que será incluido será analisado se é um número
function isNumero(n){
    if (Number(n) >= 0 && Number(n) <=100){
      return true  
    } else {
        return false
    }    
}

// o valor so será adicionado se ele não estiver na lista
function inlista(n, l) {
    if ( l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adcionar(){
    
    if ( isNumero(num.value) && !inlista(num.value, valores)) { //a açao executará normalmente se as 2 funções (isNumero e inLista) forem satisfeitas

        valores.push(Number(num.value)) //adiciona um elemento no vetor e esse elemento é um número do valor da variável 'num'. 


        //adicionar esse elemento inserido na lista

        let item = document.createElement('option') //cria um item (uma tag <option>)  que será adicionado dentro da lista

        item.text = `O Valor ${num.value} foi adicionado.` // diz qual será o valor do item. Não precisa ser convertido a número pois será uma string normal.

        lista.appendChild(item)// para adicionar na lista é preciso colocar 

        res.innerHTML = '' // isso serve para limpar a div#res após adicionar um número e confundir como se o resultado que está na tela é referente a esses números

    
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''// para apagar o número da caixa de texto quando clicar no botão
    num.focus() // para inserir um foco (para que a barrinha fique piscando quando se clicar na caixa de texto)
}

function finalizar() {   
    if (valores.length == 0) {
        alert('Adcione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            if (valores[pos] > maior){
                maior = valores[pos] 
            }

            if( valores[pos] < menor)
                menor = valores[pos]

            soma +=valores[pos]

            media = soma / tot
        }

        res.innerHTML = '' // para apagar a div
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>` //para escrever na tela a quantidade de números
        res.innerHTML += `<p>O menor número do conjuto é ${menor} </p>`
        res.innerHTML += `<p>O maior número do conjunto é ${maior}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`
         res.innerHTML += `<p>A média dos valores adicionados é ${media} </p>`
    }
}
