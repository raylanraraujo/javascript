/*
Outra maneira de calcular o fatorial de um número
Vamos usar uma fução recursiva
Uma recursão é quando uma função chama por ela mesmo.

Sabemos que:
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

ou seja: n! = n x (n-1)!
a nao ser o 1 que tem 1! = 1
*/

//RECURSIVIDADE
function fatorial (n) {
    if (n==1){
        return 1
    } else {
        return n*fatorial(n-1)
    }
}

console.log(fatorial(5))