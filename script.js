const inputIntento = document.getElementById("inputIntento");
const btnAdivinar = document.getElementById("btnAdivinar");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const historial = document.getElementById("historial");
const btnReiniciar = document.getElementById("btnReiniciar");
const tarjeta = document.getElementById("game-card");
console.log("Elementos encontrados");

//funcion para mostrar mensaje
function mostrarMensaje(texto,color) {
mensaje.textContent = texto;
mensaje.style.color = color;    
}

mostrarMensaje("¡Bienvenido al juego!",'#e94560');

//Declaramos las variables del juego
let numeroSecreto = Math.floor(Math.random()*100)+1;
let intentos = 0;
let historialIntentos = [];

console.log('(DEBUG) Numero secreto:', numeroSecreto);
//Funcion para procesar el numero ingresado en caja de texto
function verificarIntento() {
    let valor = Number(inputIntento.value);
    
    // validar entrada
    if (isNaN(valor) || valor < 1 || valor > 100) {
        mostrarMensaje('⚠ Ingresa un numero de 1 al 100','orange');
        return;
    }
    //Incrementar contador
    intentos++;
    contador.textContent='Intentos: ' + intentos;

    //Agregar al historial
    historialIntentos.push(valor);
    historial.textContent = 'Historial: ' + historialIntentos; 

    // comparar con el numero secreto
    if (valor === numeroSecreto) {
        mostrarMensaje('🎉 ¡ Correcto Era el '+ numeroSecreto +'!', '#00ff88');
        btnAdivinar.disabled = true;
        btnReiniciar.style.display = 'inline-block';
        //celebracion visual: la tarjeta brilla verde
        tarjeta.style.borderColor = '#00ff88';
        tarjeta.style.boxShadow = '0 0 40px rgba(0, 255, 136, 0.3)';

    } else if(valor > numeroSecreto){
        mostrarMensaje('📈 Muy alto. Intenta más bajo.', '#ff6b6b');
     
    } else {
        mostrarMensaje('📉 Muy bajo. Intenta más alto.', '#4ecdc4');
    }
}

function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random()*100) + 1;
    intentos = 0;
    historialIntentos = [];

    contador.textContent = 'Intentos: 0';
    historial.textContent = 'Historial:';
    mostrarMensaje('🎯 ¡Nuevo juego! Adivina el número...', '#e94560');
    btnAdivinar.disabled = false;
    btnReiniciar.style.display = 'none';
    inputIntento.value = '';
    inputIntento.focus();

    //resetar la tarjeta para celebracion visual
    tarjeta.style.borderColor = 'rgba(233, 69, 96, 0.3)';
    tarjeta.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';

    console.log('(DEBUG) Nuevo número secreto:', numeroSecreto);
}
// funcion para presionar el boton enter cuando se termina de ingresar el valor
inputIntento.addEventListener('keydown',function(event){
        if (event.key === 'Enter') {
            //event.preventDefault();
            //btnAdivinar.click();
            verificarIntento();
        }
    });

btnAdivinar.addEventListener('click',verificarIntento);
btnReiniciar.addEventListener('click',reiniciarJuego);
