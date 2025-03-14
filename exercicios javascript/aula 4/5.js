function maior(numeros) {
    let maiorNum = 0
    for (let numero of numeros) {
        if (numero > maiorNum) {
            maiorNum = numero
        }
    }
    return maiorNum
}
function menor(numeros) {
    let menorNum = 0
    for (let numero of numeros) {
        if (numero < menorNum) {
            menorNum = numero
        }
    }
    return menorNum
}
const numeros = [-1, 3, 8, -2, 4, 10]
const maiorNumero = maior(numeros)
const menorNumero = menor(numeros)
console.log(maiorNumero)
console.log(menorNumero)