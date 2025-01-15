const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intento;
let n=0;
do {
    intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
    if (intento < numeroSecreto) {
        console.log("El número es mayor.");
    } else if (intento > numeroSecreto) {
        console.log("El número es menor.");
    }
    n++;
    if (n>2) break;
} while (intento !== numeroSecreto);
console.log("¡Felicidades! Adivinaste el número.");
