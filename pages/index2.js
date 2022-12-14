let monstruo1 = {
    monstruo1Vida: 150,
    monstruo1Danio: 1,
}

let monstruo2 = {
    monstruo2Vida: 200,
    monstruo2Danio: 1.5,
}

let monstruo3 = {
    monstruo3Vida: 350,
    monstruo3Danio: 2,
}

let traveler = {
    heroeVidaa: 6,
    heroeDanio1: 50,
    heroeDanio2: 70,
}


let vidaRestanteMonstruo1 = monstruo1.monstruo1Vida
let vidaRestanteHeroe1 = traveler.heroeVidaa
let vidaRestanteMonstruo2 = monstruo2.monstruo2Vida
let vidaRestanteHeroe2 = traveler.heroeVidaa
let vidaRestanteMonstruo3 = monstruo3.monstruo3Vida
let vidaRestanteHeroe3 = traveler.heroeVidaa
let currentDialogue = 0
let currentQuestion = 0
const iconMusic = document.querySelector("#musicIcon")
const dialogueClicker = document.querySelector("#dialogue-clicker")
const containerClicker = document.querySelector("#container-clicker")
const dialogueUnoA = document.querySelector("#uno-chapterA")
const dialogueUnoB = document.querySelector("#uno-chapterB")
const dialogueUnoC = document.querySelector("#uno-chapterC")
const dialogueUnoD = document.querySelector("#uno-chapterD")
const dialogueUnoE = document.querySelector("#uno-chapterE")
const submitAnswer = document.querySelector("#riddle")
const answerTexbox = document.querySelector("#answers")
const questionText = document.querySelector("#question")
const statusText = document.querySelector("#status")
const submitClicker = document.querySelector("#submit-clicker")


let numbers = [220, 14, 34, 746473, 27, 393, 211, 9, 36, 72]
let dialogosSelectors = ["#uno-chapterA", "#uno-chapterB", "#uno-chapterC", "#uno-chapterD", "#uno-chapterE"].map(x => document.querySelector(x))

iconMusic.onclick = () => {
    if (intro.paused) {
    intro.play()
    iconMusic.src = "/img/pause.png"
    } else {
        intro.pause()
        iconMusic.src = "/img/play.png"
    }
}

const blinkIn = (target) => {
    target.src = "/img/dialogue close.png"
}

const blinkOut = (target) => {
    target.src = "/img/dialogue open.png"
}

const getLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

dialogueClicker.onclick = (event) => {
    if (currentDialogue !== 0) {
        dialogosSelectors[currentDialogue - 1].style.display = "none"
    }
    dialogosSelectors[currentDialogue].style.display = "flex"
    console.log(dialogosSelectors[currentDialogue])
    console.log(currentDialogue)
    if (currentDialogue === dialogosSelectors.length-1) {
        dialogosSelectors[currentDialogue].style.display = "none"
        dialogosSelectors[3].style.display = "flex"
        dialogueClicker.style.display = "none"
        submitAnswer.style.display = "flex"
        questionText.innerText = acertijos[currentQuestion].pregunta
    }
    currentDialogue++
}

const answer = (event) => {
    let name = getLs("name")
    let nameM = "Sati"
    if (answerTexbox.value  === acertijos[currentQuestion].rta) {
        statusText.innerText = `??Correcto!
        ${name} ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo1 - traveler.heroeDanio1}`
        vidaRestanteMonstruo1 = vidaRestanteMonstruo1 - traveler.heroeDanio1
    } else {
        statusText.innerText = `??Incorrecto!
        ${nameM} ha atacado al viajero. Vida actual de ${name}: ${vidaRestanteHeroe1 - monstruo1.monstruo1Danio}`
        vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo1.monstruo1Danio
    }
    currentQuestion++
    questionText.innerText = acertijos[currentQuestion].pregunta
    answerTexbox.value = ""
    if (vidaRestanteHeroe1 == 0) {
        statusText.innerText = `El viajero ha ca??do derrotado. ??${nameM} se ha devorado al viajero!`
        questionText.style.display = "none"
        answerTexbox.style.display = "none"
        submitClicker.style.display = "none"
    } else if (vidaRestanteMonstruo1 == 0) {
        statusText.innerText = `${nameM} ha ca??do derrotado. ??El viajero es el ganador!`
        questionText.style.display = "none"
        answerTexbox.style.display = "none"
        submitClicker.style.display = "none"
    }
}

// function acertijoM1(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${array[i].pregunta}`)
//         const rta1 = prompt(`Tu respuesta es:`)
//         if (rta1 === `${array[i].rta}`) {
//             console.log(`??Correcto!`)
//             console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo1 - traveler.heroeDanio1}`)
//             vidaRestanteMonstruo1 = vidaRestanteMonstruo1 - traveler.heroeDanio1
//         } else {
//             console.log(`??Incorrecto!`)
//             console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo1.monstruo1Danio}`)
//             vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo1.monstruo1Danio
//         }
//         if (vidaRestanteHeroe1 == 0) {
//             console.log(`El viajero ha ca??do derrotado. ??${nameM} se ha devorado al viajero!`)
//             break;
//         } else if (vidaRestanteMonstruo1 == 0) {
//             console.log(`${nameM} ha ca??do derrotado. ??El viajero es el ganador!`)
//             break;
//         }
//     }
// }
