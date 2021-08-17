const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const desligar = document.getElementById('desligar')
const semaforo = document.getElementById('semaforo')

function redSemaforo() {
    semaforo.src='imagens/semaforo_red.webp'
}

function yellowSemaforo() {
    semaforo.src='imagens/semaforo_yellow.webp'
}

function greenSemaforo() {
    semaforo.src='imagens/semaforo_green.webp'
}

function desligarSemaforo() {
    semaforo.src='imagens/semaforo_desligado.webp'
}


red.addEventListener('click', redSemaforo)
yellow.addEventListener('click', yellowSemaforo)
green.addEventListener('click', greenSemaforo)
desligar.addEventListener('click', desligarSemaforo)
