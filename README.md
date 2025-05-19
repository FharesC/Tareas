# Mini-proyectos de JavaScript – README

Este repositorio contiene tres actividades prácticas pensadas para reforzar la manipulación del DOM, los eventos y la lógica básica en JavaScript.  
Cada carpeta incluye el **HTML**, **CSS** y **JS** correspondientes; aquí encontrarás un resumen de objetivos, instrucciones y puntos de aprendizaje.

---

## 1. 🎲 Creador de Monstruos Aleatorios

| Característica | Detalle |
| -------------- | ------- |
| **Descripción** | Al pulsar el botón **“Nuevo monstruo”** se genera una criatura con <br>• Nombre aleatorio *(“Gro-zzu-rak”…)*.<br>• Esquema de colores aleatorio (fondo, texto, borde).<br>• Texto con su “poder especial”. |
| **Qué se practica** | `document.createElement`, `appendChild`, `style`, `textContent`, manejo del evento **click**. |
| **Extras sugeridos** | - Guardar los monstruos en una lista.<br>- Botón 🗑️ para eliminar cada monstruo. |

### Uso rápido
1. Clona el repo y abre `/monster-maker/index.html`.
2. Haz clic en **Nuevo monstruo** tantas veces como quieras.
3. (Opcional) Elimina criaturas con el botón de papelera.

---

## 2. 🎯 El Juego del Click Misterioso

| Característica | Detalle |
| -------------- | ------- |
| **Descripción** | Se renderiza una cuadrícula (por defecto **5 × 5**). Un cuadro aleatorio es el “premiado”.<br>El jugador hace clic hasta hallarlo; cada intento cambia el color del cuadro y aumenta el contador.<br>Al ganar, aparece un mensaje tipo **“¡Eres un genio!”** y el tablero se reinicia. |
| **Qué se practica** | `classList` para estilos, `addEventListener`, `Math.random`, `innerHTML`, cambios dinámicos de estilo. |
| **Extras sugeridos** | - Niveles de dificultad con mayor número de casillas.<br>- Animaciones o sonidos de victoria. |

### Uso rápido
1. Abre `/mystery-click/index.html`.
2. Haz clic sobre los cuadros hasta encontrar el premiado.
3. Observa cómo aumenta el contador de intentos.

---

## 3. 🎤 Simulador de Karaoke con Letras Dinámicas

| Característica | Detalle |
| -------------- | ------- |
| **Descripción** | Muestra la letra de una canción línea por línea. Con **“Siguiente línea”** se revela la próxima y la anterior cambia de estilo indicando que ya fue cantada.<br>Incluye botones para **cambiar de canción** o **reiniciar**. |
| **Qué se practica** | Manejo de **arrays** + DOM, actualización con `innerText` / `classList`, eventos **click**, ciclos y condicionales. |
| **Extras sugeridos** | - Mensaje final: **“¡Felicidades! Eres todo un artista 🎤”**.<br>- Permitir que el usuario pegue su propia letra en un `<textarea>`. |

### Uso rápido
1. Abre `/karaoke-sim/index.html`.
2. Presiona **Siguiente línea** para avanzar.
3. Reinicia o cambia de canción con los botones indicados.

---

## Cómo ejecutar los proyectos

```bash
