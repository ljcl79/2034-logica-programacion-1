// Actividad 1: Contador del 1 al 10
/*
console.log("Contador del 1 al 10:");
let contador1 = 1;
while (contador1 <= 10) {
    console.log(contador1);
    contador1++;
}

// Actividad 2: Contador regresivo de 10 a 0
console.log("\nContador regresivo de 10 a 0:");
let contador2 = 10;
while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}
*/
// Actividad 3: Cuenta progresiva hasta un número dado por el usuario
let numeroUsuario = prompt("Por favor, ingresa un número:");
numeroUsuario = Number(numeroUsuario);
if (isNaN(numeroUsuario)) {
    console.log("Por favor, ingresa un número válido.");
} else {
    console.log(`\nCuenta progresiva hasta ${numeroUsuario}:`);
    let contador3 = 0;
    while (contador3 <= numeroUsuario) {
        console.log(contador3);
        contador3++;
    }
}