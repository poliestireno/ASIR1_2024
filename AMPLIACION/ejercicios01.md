
# Ejercicios de JavaScript


## 1\. Imprimir "Hello, World!"

Este código imprime "Hello, World!" en la consola:

```
console.log("Hello, World!");
```

## 2\. Suma de dos números

Este código suma dos números y muestra el resultado en la consola:

```
let num1 = 8;
let num2 = 12;
let suma = num1 + num2;
console.log("La suma de " + num1 + " y " + num2 + " es: " + suma);
```

## 3\. Determinar si un número es par o impar

Este código define una función que determina si un número es par o impar:

```
function esPar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");
    }
}

esPar(7); // Llama a la función con 7
esPar(10); // Llama a la función con 10
```

## 4\. Encontrar el número más grande de tres números

Este código compara tres números y determina cuál es el más grande:

```
let a = 18, b = 34, c = 29;

if (a > b && a > c) {
    console.log(a + " es el número más grande");
} else if (b > a && b > c) {
    console.log(b + " es el número más grande");
} else {
    console.log(c + " es el número más grande");
}
```

## 5\. Contar de 1 a 10 con un bucle

Este código imprime los números del 1 al 10 usando un bucle:

```
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

## 6\. Reverso de una cadena

Este código invierte una cadena de texto y devuelve el resultado:

```
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

console.log(invertirCadena("javascript"));
```

## 7\. Contar vocales en una cadena

Este código cuenta cuántas vocales hay en una cadena:

```
function contarVocales(cadena) {
    let vocales = "aeiouAEIOU";
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVocales("Hola Mundo"));
```

## 8\. Factorial de un número

Este código calcula el factorial de un número:

```
function factorial(n) {
    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(factorial(5));
```

## 9\. Sumar todos los elementos de un array

Este código suma todos los elementos de un array:

```
let numerosArray = [2, 4, 6, 8, 10];
let sumaArray = numerosArray.reduce((a, b) => a + b, 0);
console.log("La suma de los elementos es: " + sumaArray);
```

## 10\. Generar un número aleatorio entre 1 y 100

Este código genera un número aleatorio entre 1 y 100:

```
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log("Número aleatorio generado: " + numeroAleatorio);
```
