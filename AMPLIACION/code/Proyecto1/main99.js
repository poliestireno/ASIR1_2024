function obtenerCarta() {
    return Math.floor(Math.random() * 11) + 1;
}

function calcularPuntuacion(mano) {
    let total = mano.reduce((acc, carta) => acc + carta, 0);
    if (total > 21 && mano.includes(11)) {
        // Cambiar un As (11) a 1 si el total supera 21
        total -= 10;
    }
    return total;
}

let manoJugador = [obtenerCarta(), obtenerCarta()];
let manoComputadora = [obtenerCarta()];

console.log(`Tu mano inicial: ${manoJugador.join(", ")} (Total: ${calcularPuntuacion(manoJugador)})`);
console.log(`Mano inicial de la computadora: ${manoComputadora[0]}, ?`);

while (calcularPuntuacion(manoJugador) < 21) {
    const accion = prompt("¿Quieres 'pedir carta' o 'plantarte'?").toLowerCase();
    if (accion === "plantarte") break;

    manoJugador.push(obtenerCarta());
    console.log(`Nueva carta: ${manoJugador[manoJugador.length - 1]}`);
    console.log(`Tu total: ${calcularPuntuacion(manoJugador)}`);
}

while (calcularPuntuacion(manoComputadora) < 17) {
    manoComputadora.push(obtenerCarta());
}

const totalJugador = calcularPuntuacion(manoJugador);
const totalComputadora = calcularPuntuacion(manoComputadora);

console.log(`Tu mano final: ${manoJugador.join(", ")} (Total: ${totalJugador})`);
console.log(`Mano final de la computadora: ${manoComputadora.join(", ")} (Total: ${totalComputadora})`);

if (totalJugador > 21) {
    console.log("Te pasaste de 21. ¡Perdiste!");
} else if (totalComputadora > 21 || totalJugador > totalComputadora) {
    console.log("¡Ganaste!");
} else if (totalJugador === totalComputadora) {
    console.log("Empate.");
} else {
    console.log("La computadora gana.");
}
