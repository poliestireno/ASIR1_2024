
# Guía Completa de JavaScript

## 1. Introducción a JavaScript

JavaScript es un lenguaje de programación de alto nivel que se ejecuta en el navegador del usuario, 
pero también se puede utilizar en el lado del servidor gracias a entornos como Node.js. Es fundamental 
para el desarrollo web moderno porque permite agregar interactividad y dinamismo a las páginas web, 
complementando HTML y CSS. Con JavaScript, se pueden crear desde simples animaciones hasta aplicaciones 
completas en el navegador.

## 2. Fundamentos Básicos

### Declaración de Variables

```javascript
// Usando var (declaración global o de función)
var nombre = 'Juan';

// Usando let (declaración con alcance de bloque)
let edad = 25;

// Usando const (declaración de constante, valor fijo)
const PI = 3.14;
```

**Explicación Detallada:**

- **var**: Permite declarar variables que pueden ser globales o locales de función. Por ejemplo, si declaras `var nombre` dentro de una función, la variable solo existirá dentro de esa función. Además, permite algo llamado "hoisting", donde la declaración de la variable es movida al inicio del ámbito (global o de función).
- **let**: Introducido en ES6, tiene un alcance de bloque, lo que significa que la variable solo es accesible dentro del bloque en el que fue definida. Esto evita problemas comunes como el uso accidental de variables fuera de su contexto.
- **const**: También introducido en ES6, se usa para declarar constantes, cuyo valor no puede cambiar una vez asignado. Ideal para valores fijos o referencias de objetos inmutables.

### Tipos de Datos

```javascript
// Número: puede ser entero o decimal
let numero = 100;

// Cadena de texto
let texto = 'Hola Mundo';

// Booleano: representa un valor de verdadero o falso
let esVerdadero = true;

// Objeto: estructura de datos compleja con pares clave-valor
let persona = {
    nombre: 'Juan',
    edad: 30
};

// Arreglo: lista de elementos ordenados
let lista = [1, 2, 3, 4, 5];
```

**Explicación Detallada:**

- **Number**: Tipo de dato numérico que JavaScript maneja para enteros y decimales.
- **String**: Almacena texto, que puede declararse con comillas simples (') o dobles (").
- **Boolean**: Representa `true` o `false`, utilizado en evaluaciones lógicas.
- **Object**: Colección de pares clave-valor. Ideal para almacenar datos complejos.
- **Array**: Estructura de datos que contiene elementos en un orden específico, accesibles mediante índices.

### Operadores Básicos

```javascript
// Operadores aritméticos
let suma = 5 + 3; // 8
let resta = 5 - 3; // 2
let producto = 5 * 3; // 15
let division = 5 / 3; // 1.6666...

// Operador de asignación
let x = 10;
x += 5; // x ahora es 15

// Operadores de comparación
let esIgual = (5 == '5'); // true
let esEstrictamenteIgual = (5 === '5'); // false
```

**Explicación Detallada:**

- **Aritméticos (+, -, *, /)**: Realizan cálculos básicos.
- **Asignación (=, +=, etc.)**: Modifican y asignan valores a las variables.
- **Comparación (==, ===)**: `==` compara solo valor; `===` compara valor y tipo, y es más estricto.

## 3. Estructuras de Control

### Condicionales

```javascript
let edad = 20;

if (edad >= 18) { 
    console.log('Es mayor de edad');
} else { 
    console.log('Es menor de edad');
}
```

**Explicación Detallada:** Los condicionales `if` y `else` permiten ejecutar bloques de código en función de una condición.

### Bucles

```javascript
// Bucle for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Bucle while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Bucle do-while
i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

**Explicación Detallada:**

- **for**: Utilizado cuando el número de iteraciones es conocido.
- **while**: Ejecuta el código mientras una condición sea `true`.
- **do-while**: Similar a `while`, pero asegura que el código se ejecute al menos una vez.

## 4. Funciones

### Declaración de Funciones

```javascript
function saludar(nombre) {
    return 'Hola ' + nombre;
}
```

### Funciones Anónimas

```javascript
let sumar = function(a, b) {
    return a + b;
};
```

### Funciones Flecha (ES6)

```javascript
let multiplicar = (a, b) => a * b;
```

## 5. Objetos y Clases

### Objetos

```javascript
let coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    arrancar: function() {
        console.log('El coche ha arrancado');
    }
};
```

### Clases (ES6)

```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}
```

## 6. Promesas y Async/Await

### Promesas

```javascript
let promesa = new Promise((resolve, reject) => {
    let exito = true;

    if (exito) {
        resolve('La operación fue exitosa');
    } else {
        reject('Hubo un error en la operación');
    }
});
```

### Async/Await

```javascript
let esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let funcionAsincrona = async () => {
    await esperar(2000);
    console.log('Han pasado 2 segundos');
};
```

## 7. Manipulación del DOM

```javascript
let elemento = document.getElementById('miElemento');
```

## 8. Eventos

```javascript
document.getElementById('miBoton').addEventListener('click', () => {
    alert('¡Botón clickeado!');
});
```

## 9. Fetch API

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json());
```

## 10. Ejemplo de To-Do List

```html
<!DOCTYPE html>
<html>
<head>
    <title>To-Do List</title>
</head>
<body>
    <h1>To-Do List</h1>
    <input type="text" id="nuevoItem" placeholder="Nuevo ítem">
    <button id="agregarBtn">Agregar</button>
    <ul id="lista"></ul>

    <script>
        document.getElementById('agregarBtn').addEventListener('click', () => {
            let nuevoItemTexto = document.getElementById('nuevoItem').value;
            if (nuevoItemTexto) {
                let nuevoItem = document.createElement('li');
                nuevoItem.textContent = nuevoItemTexto;
                document.getElementById('lista').appendChild(nuevoItem);
                document.getElementById('nuevoItem').value = '';
            }
        });
    </script>
</body>
</html>
```