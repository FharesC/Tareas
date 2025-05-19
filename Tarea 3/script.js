// Simulador de Karaoke con Letras Dinámicas
// Descripción:
// Muestran una letra de una canción línea por línea.
// Con un botón de “Siguiente línea”, se va mostrando una línea nueva y la anterior se resalta como ya cantada.
// Incluye botones para cambiar de canción o reiniciar.
// (O pueden dejar que el estudiante elija la letra con un input tipo textarea.)
// Qué practican:
// 	•	Arrays y DOM
// 	•	Actualización dinámica del contenido (innerText, classList)
// 	•	Eventos click
// 	•	Ciclos y condicionales
// Extra: Que al final diga: “¡Felicidades! Eres todo un artista :micrófono:”.
let letra = {
  0: "You are the reason for life, the air inside my lungs",
  1: "You've taken hold of my heart and there's no doubting",
  2: "That Your love is unexplainable, phenomenal",
  3: "And what Your grace has done is nothing but a miracle",
  4: "So tell me how could I ever turn away from You",
  5: "When You've always been the way, the life, and the truth",
  6: "You've given me a new heart, true reality",
  7: "I'm living for the One who set me free",
  8: "You've given mе Your vision, better than a dream",
  9: "You ain't gotta wakе me up",
  10: "It's not a fantasy",
  11: "Da-da-da-da-da-da, da-da",
  12: "Da-da-da-da-da-da, da-da-da-da",
  13: "My friends keep saying I've changed, I'm acting different now",
  14: "They wanna know what I know, they want the truth and so",
  15: "I told them: If you're free on Friday, come to youth with me",
  16: "Leave your past right at the door and you'll never be alone",
  17: "You've given me a new heart, true reality",
  18: "I'm living for the One who set me free",
  19: "You've given me Your vision, better than a dream",
  20: "You ain't gotta wake me up at all",
  21: "You turned my life right upside down",
  22: "You set my feet on higher ground",
  23: "Now I'll never be the same",
  24: "It's not a phase",
};

let contenido = document.querySelector("#cont");
let Siguiente = document.querySelector("#btn1");
let Reiniciar = document.querySelector("#btn3");
let h3a = document.createElement("h3");
h3a.className = "arriba";
let h2b = document.createElement("h2");
h2b.className = "centro";
let h4c = document.createElement("h4");
h4c.className = "abajo";
let OtraCancion = document.querySelector("#cancion2");
let otraC = document.querySelector("#OtraC");
const textAreaCancion = document.querySelector("#cancion2");
const btnGuardar = document.querySelector("#OtraC");

let contador = -1;
let contador1 = -2;
let contador2 = 0;

contenido.appendChild(h3a);
contenido.appendChild(h2b);
contenido.appendChild(h4c);

Siguiente.addEventListener("click", () => {
  contador += 1;
  contador1 += 1;
  contador2 += 1;
  if (letra[contador] == undefined) {
    h2b.innerHTML = "🎉Canción Completada🎉";
    contenido.className = "color";
    h3a.innerHTML = "";
  } else if (letra[contador1] == undefined) {
    h2b.innerHTML = `${letra[contador]}`;
    h4c.innerHTML = `${letra[contador2]}`;
  } else if (letra[contador2] == undefined) {
    h4c.innerHTML = "";
    h2b.innerHTML = `${letra[contador]}`;
  } else {
    h3a.innerHTML = `${letra[contador1]}`;
    h2b.innerHTML = `${letra[contador]}`;
    h4c.innerHTML = `${letra[contador2]}`;
  }
});

Reiniciar.addEventListener("click", () => {
  contador = -1;
  contador1 = -2;
  contador2 = 0;
  h3a.innerHTML = "";
  h2b.innerHTML = "";
  h4c.innerHTML = "";
  contenido.className = "cont";
});

otraC.addEventListener("click", () => {
  let letra2 = OtraCancion.value;
  console.log(letra2);

  letra = letra2.split("\n");
  console.log(letra);

  contador = -1;
  contador1 = -2;
  contador2 = 0;
  h3a.textContent = "";
  h2b.textContent = "";
  h4c.textContent = "";
  contenido.className = "cont";
});
