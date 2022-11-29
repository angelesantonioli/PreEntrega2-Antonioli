const monstruo1Vida = 150
const monstruo2Vida = 200
const monstruo3Vida = 350
const monstruo1Danio = 1
const monstruo2Danio = 1.5
const monstruo3Danio = 2
const heroeVidaa = 6
const heroeDanio1 = 50
const heroeDanio2 = 70
let vidaRestanteMonstruo1 = monstruo1Vida
let vidaRestanteHeroe1 = heroeVidaa
let vidaRestanteMonstruo2 = monstruo2Vida
let vidaRestanteHeroe2 = heroeVidaa
let vidaRestanteMonstruo3 = monstruo3Vida
let vidaRestanteHeroe3 = heroeVidaa
let rta7 = 0

function bienvenida() {
    console.log(`Bienvenido/a a IntrAAbyssuS, viajero. Esta es una aventura de acertijos y preguntas. Así que ¡Hora de pelear!`)
}

bienvenida()


function acertijo1() {

    const rta1 = prompt("¿Cuántos meses tienen 28 días?")

    if (rta1 === "todos los meses") {
        console.log(`¡Correcto!`)
        console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo1 - heroeDanio1}`)
        vidaRestanteMonstruo1 = vidaRestanteMonstruo1 - heroeDanio1
    } else {
        console.log(`¡Incorrecto!`)
        console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo1Danio}`)
        vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo1Danio
    }
}

function acertijo2() {
    const rta1 = prompt("Es tuyo pero todos lo usan más.")
    if (rta1 === "tu nombre") {
        console.log(`¡Correcto!`)
        console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo1 - heroeDanio1}`)
        vidaRestanteMonstruo1 = vidaRestanteMonstruo1 - heroeDanio1
    } else {
        console.log(`¡Incorrecto!`)
        console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo1Danio}`)
        vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo1Danio
    }
}

function acertijo3() {
    const rta1 = prompt("Si lo tengo, no lo comparto. Si lo comparto, no lo tengo. ¿Qué es?")
    if (rta1 === "un secreto") {
        console.log(`¡Correcto!`)
        console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo1 - heroeDanio1}`)
        vidaRestanteMonstruo1 = vidaRestanteMonstruo1 - heroeDanio1
    } else {
        console.log(`¡Incorrecto!`)
        console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo1Danio}`)
        vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo1Danio
    }
}

function acertijo4() {
    const rta1 = prompt("¿Qué cosa es que entra en el río y no se moja?")
    if (rta1 === "los rayos del sol") {
        console.log(`¡Correcto!`)
        console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo1 - heroeDanio1}`)
        vidaRestanteMonstruo1 = vidaRestanteMonstruo1 - heroeDanio1
    } else {
        console.log(`¡Incorrecto!`)
        console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo1Danio}`)
        vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo1Danio
    }
}

function acertijo5() {
    const rta1 = prompt("¿Qué es lo que no está ni dentro ni fuera de la casa, pero que es necesario para cualquier hogar?")
    if (rta1 === "las ventanas") {
        console.log(`¡Correcto!`)
        console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo1 - heroeDanio1}`)
        vidaRestanteMonstruo1 = vidaRestanteMonstruo1 - heroeDanio1
    } else {
        console.log(`¡Incorrecto!`)
        console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo1Danio}`)
        vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo1Danio
    }
}

function acertijo6() {
    const rta1 = prompt("¿Cuál es el siguiente número de esta serie: 3.829, 9.382, 2.938…")
    if (rta1 === "8.293") {
        console.log(`¡Correcto!`)
        console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo1 - heroeDanio1}`)
        vidaRestanteMonstruo1 = vidaRestanteMonstruo1 - heroeDanio1
    } else {
        console.log(`¡Incorrecto!`)
        console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo1Danio}`)
        vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo1Danio
    }
}


const tipoDeMonstruo = prompt("Elija un monstruo a enfrentar ingresando 1, 2 o 3")

if (tipoDeMonstruo == 1) {
    nameM = "Sati"
    console.log(`"Jeje, no vas a derrotarme tan fácilmente, humano. Ahora responde mis acertijos." - Exclama el gato `)
    acertijo1()
    acertijo2()
    acertijo3()
    if (vidaRestanteMonstruo1 == 0) {
        console.log(`${nameM} ha caído derrotado. ¡El viajero es el ganador!`)
    } else {
        acertijo4()
        if (vidaRestanteMonstruo1 == 0) {
            console.log(`${nameM} ha caído derrotado. ¡El viajero es el ganador!`)
        } else {
            acertijo5()
            if (vidaRestanteMonstruo1 == 0) {
                console.log(`${nameM} ha caído derrotado. ¡El viajero es el ganador!`)
            } else {
                acertijo6()
                if (vidaRestanteMonstruo1 == 0) {
                    console.log(`${nameM} ha caído derrotada. ¡El viajero es el ganador!`)
                } else {
                    console.log(`El viajero ha caído derrotado. ¡${nameM} se ha devorado al viajero!`)
                }
            }
        }
    }

} else if (tipoDeMonstruo == 2) {
    nameM = "Viri"
    console.log(`"Así que elegista probar tu astusia, viajero. Muy bien, que gane el mejor que claramente esa soy yo, muajajaja" - dice el zorro `)
    acertijo1()
    acertijo2()
    acertijo3()
    if (vidaRestanteMonstruo1 == 0) {
        console.log(`${nameM} ha caído derrotado. ¡El viajero es el ganador!`)
    } else {
        acertijo4()
        if (vidaRestanteMonstruo1 == 0) {
            console.log(`${nameM} ha caído derrotado. ¡El viajero es el ganador!`)
        } else {
            acertijo5()
            if (vidaRestanteMonstruo1 == 0) {
                console.log(`${nameM} ha caído derrotado. ¡El viajero es el ganador!`)
            } else {
                acertijo6()
                if (vidaRestanteMonstruo1 == 0) {
                    console.log(`${nameM} ha caído derrotada. ¡El viajero es el ganador!`)
                } else {
                    console.log(`El viajero ha caído derrotado. ¡${nameM} se ha devorado al viajero!`)
                }
            }
        }
    }
} else if (tipoDeMonstruo == 3) {
    nameM = "Praña"
    console.log(`"Que el juicio divino comience. Te mostraré la verdad, mortal ignorante e iluso" - dijo el carnero alzando la balanza `)
    for (i = 0; i <= 1; i++) {
        const rta1 = prompt("¿Cuántas veces se puede restar 1 a la cifra 1111?")
        rta7 = rta1
        if (rta7 != ("una sola vez")) {
            console.log(`Incorrecto. Otra vez.`)
            console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo3Danio}`)
            vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo3Danio
            if (i === 1 || vidaRestanteHeroe1 == 0) {
                console.log(`El viajero ha caído derrotado. ¡${nameM} se ha devorado al viajero!`)
                break;
            }
        } else {
            console.log(`Correcto.`)
            console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo3 - heroeDanio2}`)
            vidaRestanteMonstruo3 = vidaRestanteMonstruo3 - heroeDanio2
            console.log(`Siguiente acertijo:`)
            break;
        }
    }
    for (i = 0; i <= 1; i++) {
        const rta1 = prompt("¿Cuántos meses tienen 28 días?")
        rta7 = rta1
        if (rta7 != ("todos los meses")) {
            console.log(`Incorrecto. Otra vez.`)
            console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo3Danio}`)
            vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo3Danio
            if (i === 1 || vidaRestanteHeroe1 == 0) {
                console.log(`El viajero ha caído derrotado. ¡${nameM} se ha devorado al viajero!`)
                break;
            }
        } else {
            console.log(`Correcto.`)
            console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo3 - heroeDanio2}`)
            vidaRestanteMonstruo3 = vidaRestanteMonstruo3 - heroeDanio2
            console.log(`Siguiente acertijo:`)
            break;
        }
    }
    for (i = 0; i <= 1; i++) {
        const rta1 = prompt("Es tuyo pero todos lo usan más.")
        rta7 = rta1
        if (rta7 != ("tu nombre")) {
            console.log(`Incorrecto. Otra vez.`)
            console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo3Danio}`)
            vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo3Danio
            if (i === 1 || vidaRestanteHeroe1 == 0) {
                console.log(`El viajero ha caído derrotado. ¡${nameM} se ha devorado al viajero!`)
                break;
            }
        } else {
            console.log(`Correcto.`)
            console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo3 - heroeDanio2}`)
            vidaRestanteMonstruo3 = vidaRestanteMonstruo3 - heroeDanio2
            console.log(`Siguiente acertijo:`)
            break;
        }
    }
    for (i = 0; i <= 1; i++) {
        const rta1 = prompt("Si lo tengo, no lo comparto. Si lo comparto, no lo tengo. ¿Qué es?")
        rta7 = rta1
        if (rta7 != ("un secreto")) {
            console.log(`Incorrecto. Otra vez.`)
            console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo3Danio}`)
            vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo3Danio
            if (i === 1 || vidaRestanteHeroe1 == 0) {
                console.log(`El viajero ha caído derrotado. ¡${nameM} se ha devorado al viajero!`)
                break;
            }
        } else {
            console.log(`Correcto.`)
            console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo3 - heroeDanio2}`)
            vidaRestanteMonstruo3 = vidaRestanteMonstruo3 - heroeDanio2
            console.log(`Siguiente acertijo:`)
            break;
        }
    }
    for (i = 0; i <= 1; i++) {
        const rta1 = prompt("¿cuánto tiempo necesitan 100 máquinas para elaborar 100 artículos?")
        rta7 = rta1
        if (rta7 != ("5 minutos")) {
            console.log(`Incorrecto. Otra vez.`)
            console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo3Danio}`)
            vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo3Danio
            if (i === 1 || vidaRestanteHeroe1 == 0) {
                console.log(`El viajero ha caído derrotado. ¡${nameM} se ha devorado al viajero!`)
                break;
            }
        } else {
            console.log(`Correcto.`)
            console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo3 - heroeDanio2}`)
            vidaRestanteMonstruo3 = vidaRestanteMonstruo3 - heroeDanio2
            console.log(`${nameM} ha caído derrotado. ¡El viajero es el ganador!`)
            break;
        }
    }
} else {
    console.log(`Ingrese un número válido `)
}
