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
    
    // validar entrada para saber si es numero
    if (isNaN(valor) || valor < 1 || valor > 100) {
        mostrarMensaje('⚠ Ingresa un numero de 1 al 100','orange');
        return;
    }
    //Incrementar contador
    intentos++;
    contador.textContent='Intentos: ' + intentos;

    //Agregar al historial
    historialIntentos.push(valor);
    //historial.textContent = 'Historial: ' + historialIntentos; 
    let color = valor > numeroSecreto ? '#ff6b6b' : valor < numeroSecreto ? '#4ecdc4' : '#00ff88';
    historial.innerHTML += '<span class="guess-pill" style="background:' + color + '30; color:' + color + '">' + valor + '</span>';
    
    // comparar con el numero secreto
    if (valor === numeroSecreto) {
        mostrarMensaje('🎉 ¡ Correcto Era el '+ numeroSecreto +'!', '#00ff88');
        btnAdivinar.disabled = true;
        btnReiniciar.style.display = 'inline-block';
        //celebracion visual: la tarjeta brilla verde
        tarjeta.style.borderColor = '#00ff88';
        tarjeta.style.boxShadow = '0 0 40px rgba(0, 255, 136, 0.3)';
        
    } else if(valor > numeroSecreto){
        //validamos con la funcion obtenerPista
        let pista = obtenerPista(valor,numeroSecreto);
        mostrarMensaje('📈 Muy alto.'+ pista, '#ff6b6b');
     
    } else {
        let pista = obtenerPista(valor,numeroSecreto);
        mostrarMensaje('📉 Muy bajo.'+ pista, '#4ecdc4');
    }
    //lamamos a la funcion para verificar los intentos
    verificarGameover();
}

//funcion para verificar hasta 10 intentos
function verificarGameover(){
    if (intentos===10) {
        mostrarMensaje('🕹 Game Over el numero fue '+ numeroSecreto,'orange');
        btnAdivinar.disabled = true;
        btnReiniciar.style.display = 'inline-block';
        
    }
}

function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random()*100) + 1;
    intentos = 0;
    historialIntentos = [];

    contador.textContent = 'Intentos: 0';
    //historial.textContent = 'Historial:';
    historial.innerHTML = '';
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

//funcion para Pistas de cercania
function obtenerPista(intento, secreto) {
    let diferencia = Math.abs(intento - secreto); 
    if (diferencia <= 5) {
        return '🔥 ¡Muy Cerca!';
    } else if(diferencia <= 15){
        return '♨️ Caliente';
    }else if(diferencia <= 30){
        return '🌤️ Tibio';
    }else{
        return '❄️ Frío';
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
btnReiniciar.addEventListener('click',reiniciarJuego);
