let suma = 0;
let cantidad = 0;

while (true) {
    const entrada = prompt("Introduce una nota (o escribe 'fin' para terminar):");
    if (entrada.toLowerCase() === "fin") break;

    const nota = parseFloat(entrada);
    if (!isNaN(nota)) {
        suma += nota;
        cantidad++;
    } else {
        console.log("Introduce un número válido.");
    }
}

if (cantidad > 0) {
    const promedio = suma / cantidad;
    console.log(`El promedio de las notas es: ${promedio.toFixed(2)}`);
} else {
    console.log("No ingresaste ninguna nota válida.");
}
