
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
- **var**: Declara variables que pueden ser globales o locales de función, con comportamiento de "hoisting".
- **let**: Tiene un alcance de bloque, lo que significa que la variable solo es accesible dentro del bloque en el que fue definida.
- **const**: Declara constantes cuyo valor no puede cambiar una vez asignado. Ideal para valores fijos.

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

- **Number**: Tipo de dato numérico que maneja enteros y decimales.
- **String**: Almacena texto con comillas simples (') o dobles (").
- **Boolean**: Representa valores de true o false.
- **Object**: Colección de pares clave-valor para datos complejos.
- **Array**: Estructura que contiene elementos en un orden específico.

### Operadores Básicos

```javascript
// Operadores aritméticos para cálculos básicos
let suma = 5 + 3;
let resta = 5 - 3;
let producto = 5 * 3;
let division = 5 / 3;

// Operador de asignación
let x = 10;
x += 5;

// Operadores de comparación
let esIgual = (5 == '5');
let esEstrictamenteIgual = (5 === '5');
```

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

### Bucles

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

## 4. Funciones

### Declaración de Funciones

```javascript
function saludar(nombre) {
    return 'Hola ' + nombre;
}
let saludo = saludar('Juan');
```

### Funciones Anónimas y Flecha (ES6)

```javascript
let sumar = function(a, b) {
    return a + b;
};

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
console.log(coche.marca);
coche.arrancar();
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
let juan = new Persona('Juan', 30);
juan.saludar();
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

promesa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});
```

### Async/Await

```javascript
let esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let funcionAsincrona = async () => {
    await esperar(2000);
    console.log('Han pasado 2 segundos');
};
funcionAsincrona();
```

## 7. Manipulación del DOM

### Selección de Elementos

```javascript
let elemento = document.getElementById('miElemento');
let elementos = document.getElementsByClassName('miClase');
let elementosTag = document.getElementsByTagName('div');
```

### Modificación de Contenido

```javascript
let parrafo = document.getElementById('miParrafo');
parrafo.textContent = 'Nuevo contenido';
```

### Creación de Elementos

```javascript
let nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Hola, soy un nuevo div';
document.body.appendChild(nuevoDiv);
```

## 8. Eventos

### Adición de Eventos

```javascript
let boton = document.getElementById('miBoton');
boton.addEventListener('click', () => {
    alert('¡Botón clickeado!');
});
```

## 9. Fetch API

### Petición GET

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

### Petición POST

```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

## 10. Ejemplo Avanzado: To-Do List

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

---

Este ejemplo muestra cómo combinar selección de elementos, eventos y manipulación del DOM para crear una aplicación interactiva básica.
