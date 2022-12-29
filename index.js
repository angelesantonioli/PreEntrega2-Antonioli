

const intro = document.querySelector("#intro")
const iconMusic = document.querySelector("#musicIcon")
const satiIcon = document.querySelector("#satiIcon")
const cero = document.querySelector("#cero")
const welcome = document.querySelector("#welcome")
const nament = document.querySelector("#nament")
const correct = document.querySelector("#correct")
const setName = document.querySelector("#login")
const nameInput = document.querySelector("#name")
const button = document.querySelector("#boton")

iconMusic.onclick = () => {
    if (intro.paused) {
    intro.play()
    iconMusic.src = "img/pause.png"
    } else {
        intro.pause()
        iconMusic.src = "img/play.png"
    }
}

cero.onmouseover = () => {
    satiIcon.src = "img/monster card1C.jpg"
}

cero.onmouseout = () => {
    satiIcon.src = "img/monster card1.jpg"
}

const loadLs = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const getLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

setName.onsubmit = (event) => {
    event.preventDefault()
    if (nameInput.value =! '' && nameInput.value.lenght <= 12 ) {
        loadLs("login",true)
        let validar = getLs("login")
        const nombreUsuario = nameInput.value
        loadLS("name", nombreUsuario)
    }
    if (validar.value === true) {
    }
}