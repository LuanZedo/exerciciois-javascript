function calcularMedia(numeros) {
    let media = numeros.forEach(value => value + value) / numeros.lenght
    return media
}

function calcularAcimaMedia (numeros, media) {
    return numeros.forEach(value => value > media)
}

const numeros = [6, 8, 9, 5]
const media = calcularMedia(numeros)
const acimaMedia = calcularAcimaMedia(numeros, media)

console.log(media)
console.log(acimaMedia)


//     let acimaMedia = numeros.forEach(value => value > media)
//     let media = numeros.forEach(value => value + value) / numeros.lenght