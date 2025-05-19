// . Creador de Monstruos Aleatorios
// Descripción:
// Los estudiantes deben crear una app que genere un “monstruo” al azar cada vez que se presione un botón.
// Cada monstruo tiene:
// 	•	Un nombre aleatorio (combinando sílabas como “Gro”, “zzu”, “rak”).
// 	•	Una combinación de colores aleatorios (fondo, texto, borde).
// 	•	Un “poder especial” mostrado como texto.
// Qué practican:
// 	•	createElement
// 	•	appendChild
// 	•	style
// 	•	textContent
// 	•	Eventos click
// Extra: Pueden guardar los monstruos creados en una lista y luego eliminarlos con un botón :papelera:.
// ⸻

let Crear = document.querySelector("#btn1")
let Eliminar  = document.querySelector("#btn2")
let contenedor = document.querySelector("#Cont")
let monstruo = {

    nombre: {
        0 : "bak",
        1 : "gro",
        2 : "zzu",
        3 : "rak",
        4 : "groth",
        5 : "okk",
        6 : "ug",
        7 : "thul"
    },
    fondo : {
        0 : "#F7AD45",
        1 : "#CAE8BD",
        2 : "#90D1CA",
        3 : "#BE5B50",
        4 : "#102E50",
        5 : "#FFD63A"
    },
    texto : {
        0 : "Mounstro tenebroso",
        1 : "Mounstro grande y temible",
        2 : "Mounstro miedoso",
        3 : "Mounstro dormilón"
    },
    borde : {
        0 : "1px solid black",
        1 : "2px solid black",
        2 : "3px solid black",
        3 : "4px solid black"
    },
    poder : {
        0 : "Llama Abismal",
        1 : "Grito de Ruina",
        2 : "Sombra Viviente",
        3 : "Corrupción Espinal",
        4 : "Eco Temporal",
        5 : "Hambre Dimensional"
    },
    emojis:{
        0 : "👾",
        1 : "👽",
        2 : "🤖",
        3 : "🐨",
        4 : "🐻‍❄️",
        5 : "🐦‍🔥",
        6 : "🎃"
    }

}


Crear.addEventListener("click" , ()=>{
    contenedor.innerHTML = ""

let numrandom1 = Math.random()*7
numrandom1 = numrandom1.toFixed(0)
console.log(numrandom1);

let numrandom2 = Math.random()*5
numrandom2 = numrandom2.toFixed(0)

let numrandom3 = Math.random()*3
numrandom3 = numrandom3.toFixed(0)

let numrandom4 = Math.random()*3
numrandom4 = numrandom4.toFixed(0)

let numrandom5 = Math.random()*5
numrandom5 = numrandom5.toFixed(0)

let numrandom6 = Math.random()*6
numrandom6 = numrandom6.toFixed(0)

let h2 = document.createElement("h2")
h2.innerText = `Nombre: mo${monstruo.nombre[numrandom1]} `
let div = document.createElement("div")
div.innerText = monstruo.texto[numrandom3]
div.style.border = monstruo.borde[numrandom4]
div.style.backgroundColor= monstruo.fondo[numrandom2]
div.style.height = "8rem"
div.style.width = "70%"
div.classList.add("centrado")
let h1 = document.createElement("h1")
h1.classList.add("letra")
h1.innerText = `${monstruo.emojis[numrandom6]}`
let h3 = document.createElement("h3")
h3.innerText =`Poder epecial : ${monstruo.poder[numrandom5]}`
h3.classList.add("fin")

    // Estructura acá
contenedor.appendChild(h2)
contenedor.appendChild(h1)
contenedor.appendChild(div)
contenedor.appendChild(h3)

})

Eliminar.addEventListener("click", ()=>{
    contenedor.innerHTML = ""
})