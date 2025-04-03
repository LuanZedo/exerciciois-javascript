let botoes = document.querySelectorAll(".drum");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function() {
        let botaoAtivo = `${botoes[i].innerHTML}`
        makeSound(botaoAtivo);
        buttonAnimation(botaoAtivo);
    });
    
    console.log(`${botoes[i].innerHTML}`);
};

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio(`sounds/tom-1.mp3`).play();
            break;
        case "a":
            new Audio(`sounds/tom-2.mp3`).play();
            break;
        case "s":
            new Audio(`sounds/tom-3.mp3`).play();
            break;
        case "d":
            new Audio(`sounds/tom-4.mp3`).play();
            break;
        case "j":
            new Audio(`sounds/snare.mp3`).play();
            break;
        case "k":
            new Audio(`sounds/crash.mp3`).play();
            break;
        case "l":
            new Audio(`sounds/kick-bass.mp3`).play();
            break;
        default:
    }
};

function buttonAnimation(currentKey) {
    let botaoAtivo = document.querySelector(`.${currentKey}`);

        botaoAtivo.classList.add("pressed");

        setTimeout(function () {
            botaoAtivo.classList.remove("pressed");
        }, 100);
}

