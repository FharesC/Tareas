// 2. El Juego del Click Misterioso
// Descripción:
// Renderizan una cuadrícula (por ejemplo 5x5 divs).
// Uno de ellos es el “cuadro premiado” oculto al azar.
// El usuario debe hacer clic hasta encontrarlo.
// Cada clic cambia el color del cuadro y muestra un contador de intentos.
// Cuando gana, se muestra un mensaje divertido tipo “¡Eres un genio!” y se reinicia el juego.
// Qué practican:
// 	•	Manipulación de clases
// 	•	addEventListener
// 	•	Math.random
// 	•	innerHTML
// 	•	Cambios dinámicos de estilo
// Extra: Agrega niveles de dificultad con más casillas.

let inputs = document.querySelectorAll("input")
let numR = Math.random()*35
numR = numR.toFixed(0)
let contador = document.querySelector("#int")
let btn2 = document.querySelector("#reset")
inputs.forEach(Item =>{
    Item.addEventListener("click" , ()=>{
        
        if (Item.value == numR) {
           Item.style.backgroundColor = "#537D5D"
           alert("Felicidades, hayaste el número correcto")
           
        }else{
            Item.style.backgroundColor = "#641B2E"
            contador.innerHTML = parseInt(contador.innerHTML)+1
        }
        
    })
})

const reinicia = () =>{
inputs.forEach(item =>{
        item.style.backgroundColor = ""
    })

    numR = Math.random()*35
    numR = numR.toFixed(0)
    contador.innerHTML = 0  
}

btn2.addEventListener("click", ()=>{
    reinicia()
    
})