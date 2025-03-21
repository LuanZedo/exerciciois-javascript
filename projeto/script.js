let jogador1 = Math.ceil(Math.random() * 6)
let jogador2 = Math.ceil(Math.random() * 6)

let h1 = document.querySelector("h1")

if (jogador1 > jogador2) {
    h1.innerHTML = "Jogador 1 venceu!🎉"
}
else if (jogador2 > jogador1) {
    h1.innerHTML = "Jogador 2 venceu!🎉"
}
else if (jogador1 == jogador2){
    h1.innerHTML = "empate 😔"
}

let img1 = document.querySelector(".img1");
img1.setAttribute("src", `imagens/dado${jogador1}.png`)

let img2 = document.querySelector(".img2");
img2.setAttribute("src", `imagens/dado${jogador2}.png`)
