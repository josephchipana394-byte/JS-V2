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
// funcion para presionar el boton enter cuando se termina de ingresar el valor
inputIntento.addEventListener('keydown',function(event){
        if (event.key === 'Enter') {
            //event.preventDefault();
            //btnAdivinar.click();
            verificarIntento();
        }
    });

btnAdivinar.addEventListener('click',verificarIntento);
