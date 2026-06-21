//1. validad si puede votar
let edad=prompt("¿Cuantos años tienes?");
edad = Number(edad);
if (isNaN(edad)) {
    alert("el valor ingresado no es un numero, recuerde que debe ingresar un valor numerico")
}else if (edad>=18) {
    alert("Eres Mayor de edad, si puedes votar")
} else {
    alert("Aun no puedes votar");
}

//2. Recomendacion segun temperatura

let temperatura=Number(prompt("¿Que temperatura hace hoy?"));
if (temperatura <= 15) {
    alert("Hace frio, ponte abrigo");
}else if (temperatura <= 25) {
    alert("Clima templado, usa casaca ligera");
}else{
    alert("Hace calor usa polo y gorra");
}

//RETO 1: Pide al usuario que cree una contraseña y verifica si tiene al menos 6 caracteres.
while (true) {
let contraseña=prompt("Ingrese una contraseña:")
if (contraseña.length>=6){
    alert("Contraseña ingresada correctamente!!!")
    break;
}else{
    alert("La contraseña debe contener al menos 6 caracteres")
}    
}

//Clasificar la edad (más de dos condiciones)
//Agrega lógica para mostrar diferentes mensajes según rangos de edad:
//Menores de 13
//Entre 13 y 17
//Mayores de 18
let edad1=Number(prompt("Ingrese tu edad"))
if (edad1 < 13) {
    alert("Eres un niño👦")
} else if (edad1>=13 && edad1<=17){
    alert("Eres un adolescente 🧑")
}else{
    alert("Eres una persona Adulta👨")
}

//Reto 3: Combinar condiciones
//Muestra un mensaje especial si la edad es mayor de 18 y la temperatura es menor de 15.
if (edad1 > 18 && temperatura < 15) {
    alert("Eres una persona adulta con frio: lleva un abrigo extra");
}