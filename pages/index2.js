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

let numbers = [220, 14, 34, 746473, 27, 393, 211, 9, 36, 72]

function bienvenida() {
    console.log(`Bienvenido/a a IntrAAbyssuS, viajero. Esta es una aventura de acertijos y preguntas. Así que ¡Hora de pelear!`)
}

bienvenida()

function acertijoM1(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].pregunta}`)
        const rta1 = prompt(`Tu respuesta es:`)
        if (rta1 === `${array[i].rta}`) {
            console.log(`¡Correcto!`)
            console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo1 - traveler.heroeDanio1}`)
            vidaRestanteMonstruo1 = vidaRestanteMonstruo1 - traveler.heroeDanio1
        } else {
            console.log(`¡Incorrecto!`)
            console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo1.monstruo1Danio}`)
            vidaRestanteHeroe1 = vidaRestanteHeroe1 - monstruo1.monstruo1Danio
        }
        if (vidaRestanteHeroe1 == 0) {
            console.log(`El viajero ha caído derrotado. ¡${nameM} se ha devorado al viajero!`)
            break;
        } else if (vidaRestanteMonstruo1 == 0) {
            console.log(`${nameM} ha caído derrotado. ¡El viajero es el ganador!`)
            break;
        }
    }
}

function acertijoM3(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].pregunta}`)
        const rta1 = prompt(`Tu respuesta es:`)
        if (rta1 === `${array[i].rta}`) {
            console.log(`¡Correcto!`)
            console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo3 - traveler.heroeDanio2}`)
            vidaRestanteMonstruo3 = vidaRestanteMonstruo3 - traveler.heroeDanio2
        } else {
            console.log(`¡Incorrecto!`)
            console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe3 - monstruo3.monstruo3Danio}`)
            vidaRestanteHeroe3 = vidaRestanteHeroe3 - monstruo3.monstruo3Danio
        }
        if (vidaRestanteHeroe3 == 0) {
            console.log(`El viajero ha caído derrotado. ¡${nameM} se ha devorado al viajero!`)
            break;
        } else if (vidaRestanteMonstruo3 == 0) {
            console.log(`${nameM} ha caído derrotado. ¡El viajero es el ganador!`)
            break;
        }
    }
}

function mate(array) {
    console.log(`2x + 2 * (x + 1) = 3 * (x + 1)`)
    const rta1 = prompt(`${array[2].pregunta}`)
    if (rta1 === `${array[2].rta}`) {
        console.log(`¡Correcto!`)
        console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo3 - traveler.heroeDanio2}`)
        vidaRestanteMonstruo3 = vidaRestanteMonstruo3 - traveler.heroeDanio2
    } else {
        console.log(`¡Incorrecto!`)
        console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe1 - monstruo1.monstruo1Danio}`)
        vidaRestanteHeroe3 = vidaRestanteHeroe3 - monstruo3.monstruo3Danio
    }
}

function init3() {
    n = Math.random()
    const rta = prompt(`Dime un número más pequeño que ${n} `)
    if (rta < n) {
        console.log(`¡Correcto!`)
        console.log(`${nameM} te mira con diversión. "Veo que estás atento. Eso es bueno" luego ve tu expresión confundida y ríe "Claro que ese no era un acertijo, humano ignorante. Solamente te necesito atento para derrotarte de manera justa. Ahora sí." Siguiente:`)
    } else {
        console.log(`¡Incorrecto!`)
        console.log(`${nameM} te mira con desaprobación. "¿Ya estás cansado luego de los otros dos? Tienes suerte que eso era de prueba. Soy un ser justo. Despierta ahora y prepárate."`)
    }
}

function ordenarAlf(array) {
    const ascendente = [...array[0].pregunta].sort((a, b) => {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        } else {
            return 0
        }
    })
    console.log(`Tienes 20 segundos para ordenarlas de manera alfabética de A - Z las siguientes palabras:`)
    const rta = prompt(`sueños, esperanza, justo, recuerdo, florece, vacío, silencio, mañana, engaño, amanecer`)
    const rtaCorrecta = ascendente.reduce((acc, elemento) => {
        return acc + `${elemento} `
    }, "")
    if (rta == rtaCorrecta) {
        console.log(`¡Correcto!`)
        console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo3 - traveler.heroeDanio2}`)
        vidaRestanteMonstruo3 = vidaRestanteMonstruo3 - traveler.heroeDanio2
    } else {
        console.log(`¡Incorrecto!`)
        console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe3 - monstruo3.monstruo3Danio}`)
        vidaRestanteHeroe3 = vidaRestanteHeroe3 - monstruo3.monstruo3Danio
    }
}

function compare() {
    const x = prompt(`Elige un número del 1 al 10 `)
    console.log(`Con ese número reemplazándolo en X vas a resolver estas dos ecuaciones en 1 minuto: `)
    console.log(`a) (X/2) + 4 + (X-3) `)
    console.log(`b) 2*(X-5) + X`)
    const rta = prompt(`¿Cuál de los resultados es mayor? ¿a o b?`)
    a = (x / 2) + 4 + (x - 3)
    b = 2 * (x - 5) + x
    if (a < b) {
        if (rta == `b`) {
            console.log(`¡Correcto!`)
            console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo3 - traveler.heroeDanio2}`)
            vidaRestanteMonstruo3 = vidaRestanteMonstruo3 - traveler.heroeDanio2
        } else {
            console.log(`¡Incorrecto!`)
            console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe3 - monstruo3.monstruo3Danio}`)
            vidaRestanteHeroe3 = vidaRestanteHeroe3 - monstruo3.monstruo3Danio
        }
    } else {
        if (rta == `a`) {
            console.log(`¡Correcto!`)
            console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo3 - traveler.heroeDanio2}`)
            vidaRestanteMonstruo3 = vidaRestanteMonstruo3 - traveler.heroeDanio2
        } else {
            console.log(`¡Incorrecto!`)
            console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe3 - monstruo3.monstruo3Danio}`)
            vidaRestanteHeroe3 = vidaRestanteHeroe3 - monstruo3.monstruo3Danio
        }
    }
}


const tipoDeMonstruo = prompt("Elija un monstruo a enfrentar ingresando 1, 2 o 3")

if (tipoDeMonstruo == 1) {
    nameM = "Sati"
    console.log(`"Jeje, no vas a derrotarme tan fácilmente, humano. Ahora responde mis acertijos." - Exclama el gato `)
    acertijoM1(acertijos)
}

else if (tipoDeMonstruo == 2) {
    nameM = "Viri"
    console.log(`"Así que elegista probar tu astusia, viajero. Muy bien, que gane el mejor que claramente esa soy yo, muajajaja" - dice el zorro `)
}

else if (tipoDeMonstruo == 3) {
    nameM = "Praña"
    console.log(`"Que el juicio divino comience. Te mostraré la verdad, mortal ignorante e iluso" - dijo el carnero alzando la balanza `)
    init3()
    ordenarAlf(mat)
    compare()
    if ((vidaRestanteHeroe3 - 2) == 0) {
        console.log(`${nameM} te mira de manera fanfarrona. "Veo que estás cerca de perder así que te daré una ayuda: Te preguntaré un acertijo de divisiones. ¿No debería ser dificil, verdad? `)
        const x = prompt(`Elige un número del 1 al 10 `)
        console.log(`En esta lista de números, ¿Cuál es el 1er número divisible por ${x}? `)
        const pregunta = numbers.reduce((acc, elemento) => {
            return acc + `${elemento} `
        }, "")
        const rta = prompt(`${pregunta} `)
        const divisible = numbers.find((elemento) => {
            return elemento % x === 0
        })
        console.log(divisible)
        if (divisible == rta) {
            console.log(`¡Correcto!`)
            console.log(`El viajero ha atacado a ${nameM}. Vida actual de ${nameM}: ${vidaRestanteMonstruo3 - traveler.heroeDanio2}`)
            vidaRestanteMonstruo3 = vidaRestanteMonstruo3 - traveler.heroeDanio2
        } else {
            console.log(`¡Incorrecto!`)
            console.log(`${nameM} ha atacado al viajero. Vida actual de viajero: ${vidaRestanteHeroe3 - monstruo3.monstruo3Danio}`)
            vidaRestanteHeroe3 = vidaRestanteHeroe3 - monstruo3.monstruo3Danio
        }
    }
    mate(mat)
    acertijoM3(acertijos)

} else {
    console.log(`Ingrese un número válido `)
}