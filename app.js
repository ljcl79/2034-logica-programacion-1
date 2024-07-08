//Desafíos:

//1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

// Solicita al usuario que ingrese el día de la semana
let diaSemana = prompt("¿Qué día de la semana es?");

// Convierte la respuesta a minúsculas para una comparación más fácil
diaSemana = diaSemana.toLowerCase();

// Comprueba si es "sábado" o "domingo" y muestra el mensaje correspondiente
//la condicion se cumplio
if (diaSemana === "sábado" || diaSemana === "sabado" || diaSemana === "domingo") {
    alert("¡Buen fin de semana!");
} else {
     //La condicion NO se cumplio
    alert("¡Buena semana!");
}

//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
// Solicita al usuario que ingrese un número
let numero = prompt("Por favor, ingresa un número:");

// Convierte el valor ingresado a un número
numero = Number(numero);

// Verifica si el número es positivo, negativo o cero y muestra una alerta correspondiente
if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
} else if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}


//3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
// Solicita al usuario que ingrese su puntuación
let puntuacion = prompt("Por favor, ingresa tu puntuación:");

// Convierte el valor ingresado a un número
puntuacion = Number(puntuacion);

// Verifica si la puntuación es un número válido y muestra el mensaje correspondiente
if (isNaN(puntuacion)) {
    alert("Por favor, ingresa una puntuación válida.");
} else if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Inténtalo nuevamente para ganar.");
}


//4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
// Solicita al usuario que ingrese su saldo
let saldo = prompt("Por favor, ingresa el saldo de tu cuenta:");

// Convierte el valor ingresado a un número
saldo = Number(saldo);

// Verifica si el saldo es un número válido y muestra el mensaje correspondiente
if (isNaN(saldo)) {
    alert("Por favor, ingresa un saldo válido.");
} else {
    // Utiliza un template string para crear el mensaje
    let mensaje = (`Tu saldo actual es $${saldo.toFixed(2)}.`);
    alert(mensaje);
}



//5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
// Solicita al usuario que ingrese su nombre
let nombre = prompt("Por favor, ingresa tu nombre:");

// Verifica si se ingresó un nombre válido y muestra una alerta de bienvenida
if (nombre) {
    alert(`¡Bienvenido/a, ${nombre}!`);
} else {
    alert("No ingresaste un nombre válido.");
}


