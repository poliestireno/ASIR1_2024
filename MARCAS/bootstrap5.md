
# Apuntes de Bootstrap 5 Avanzado

---

## 1. Introducción a Bootstrap

**¿Qué es Bootstrap?**  
Bootstrap es una biblioteca de desarrollo web responsiva y modular que ofrece componentes prediseñados para HTML, CSS y JavaScript. Es ideal para crear interfaces de usuario consistentes y profesionalmente estilizadas, lo que reduce la cantidad de CSS y JavaScript personalizados que un desarrollador necesita escribir.

**Características principales de Bootstrap 5:**

- **Mobile-first**: Diseño responsivo por defecto.
- **Compatibilidad con navegadores modernos**: Compatible con los navegadores más utilizados.
- **Sin jQuery**: Bootstrap 5 elimina la dependencia de jQuery, reduciendo el peso y aumentando el rendimiento.
- **Soporte de CSS variables**: Personalización avanzada mediante CSS nativo.
- **Componentes dinámicos con JavaScript**: Incluye modales, tooltips, carousels y más.

**Instalación detallada de Bootstrap 5:**

- **CDN**: Incluir el siguiente enlace en el `<head>`:
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  ```

- **NPM**:
  ```bash
  npm install bootstrap
  ```

- **SCSS**: Bootstrap puede usarse en proyectos de SCSS para una mayor personalización.
  ```scss
  @import "node_modules/bootstrap/scss/bootstrap";
  ```

---

## 2. Contenedores

**Definición detallada de contenedores**  
Los contenedores ayudan a centrar y estructurar el contenido. Bootstrap ofrece varios tipos de contenedores que se adaptan automáticamente a diferentes tamaños de pantalla.

**Ejemplos avanzados de contenedores:**

```html
<div class="container">
    <p>Este es un contenedor estándar.</p>
</div>

<div class="container-fluid bg-light p-3">
    <p>Este es un contenedor que ocupa el ancho completo.</p>
</div>

<div class="container-md bg-info p-3">
    <p>Este contenedor es de ancho completo en dispositivos pequeños, pero tiene un ancho fijo en dispositivos medianos o más grandes.</p>
</div>
```

**Nesting de contenedores**  
Puedes incluir contenedores dentro de otros para diferentes secciones de una página:

```html
<div class="container">
    <div class="container-sm bg-light p-3">
        <p>Contenedor interno solo para pantallas pequeñas.</p>
    </div>
</div>
```

---

## 3. Grid (Sistema de Rejilla)

**Sistema de 12 columnas avanzado**  
Bootstrap permite combinar tamaños de columnas y puntos de quiebre para crear layouts flexibles. Cada fila puede tener hasta 12 columnas, pero puedes crear layouts combinados con más de una fila.

**Ejemplo de Grid avanzado con múltiples puntos de quiebre:**

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-8 col-lg-4 bg-primary p-3 text-white">Columna 1</div>
        <div class="col-6 col-md-4 col-lg-4 bg-secondary p-3 text-white">Columna 2</div>
        <div class="col-6 col-lg-4 bg-success p-3 text-white">Columna 3</div>
    </div>
</div>
```

**Alineación y ordenación de columnas**  
Las clases `.order-{n}` permiten cambiar el orden visual de las columnas sin modificar el HTML.

```html
<div class="row">
    <div class="col order-3 bg-warning p-2">Columna 1 (Orden 3)</div>
    <div class="col order-1 bg-info p-2">Columna 2 (Orden 1)</div>
    <div class="col order-2 bg-danger p-2">Columna 3 (Orden 2)</div>
</div>
```

**Alineación vertical y horizontal de contenido en el Grid**

```html
<div class="row align-items-center">
    <div class="col bg-secondary text-white p-2">Centro alineado verticalmente</div>
</div>

<div class="row justify-content-between">
    <div class="col-3 bg-primary text-white p-2">Izquierda</div>
    <div class="col-3 bg-danger text-white p-2">Derecha</div>
</div>
```


---

## 4. Imágenes

**Clases avanzadas de imágenes y ejemplos complejos**  
Bootstrap permite crear imágenes responsivas, redondeadas y miniaturas. Además, se pueden combinar clases para lograr efectos adicionales.

**Ejemplo avanzado de imágenes:**

```html
<div class="container text-center">
    <img src="imagen.jpg" class="img-fluid rounded mx-auto d-block" alt="Imagen centrada y redondeada">
    <img src="imagen.jpg" class="img-thumbnail mt-3" alt="Imagen miniatura">
</div>
```

**Imágenes responsivas en un Grid:**

```html
<div class="container">
    <div class="row">
        <div class="col-6 col-md-4">
            <img src="imagen1.jpg" class="img-fluid rounded" alt="Imagen 1">
        </div>
        <div class="col-6 col-md-4">
            <img src="imagen2.jpg" class="img-fluid rounded" alt="Imagen 2">
        </div>
        <div class="col-6 col-md-4">
            <img src="imagen3.jpg" class="img-fluid rounded" alt="Imagen 3">
        </div>
    </div>
</div>
```

---

## 5. Tablas

**Tablas con clases avanzadas y personalización**  
Las tablas en Bootstrap son muy versátiles. Se pueden combinar varias clases para lograr un diseño atractivo y funcional.

**Ejemplo avanzado de tabla con diferentes estilos:**

```html
<table class="table table-striped table-bordered table-hover table-dark">
    <thead class="table-primary">
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Ciudad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Carlos</td>
            <td>25</td>
            <td>Madrid</td>
        </tr>
        <tr class="table-success">
            <td>2</td>
            <td>Ana</td>
            <td>28</td>
            <td>Barcelona</td>
        </tr>
        <tr class="table-warning">
            <td>3</td>
            <td>Juan</td>
            <td>35</td>
            <td>Valencia</td>
        </tr>
    </tbody>
</table>
```

---

## 6. Colores

**Uso de colores en diferentes componentes de Bootstrap**  
Bootstrap permite personalizar colores para textos, fondos y bordes de elementos. Estos colores están diseñados para mejorar la accesibilidad.

**Ejemplos de uso de colores avanzados:**

```html
<p class="text-primary">Texto en azul (primary).</p>
<p class="text-warning">Texto en amarillo (warning).</p>
<div class="p-3 mb-2 bg-danger text-white">Div con fondo rojo (danger) y texto blanco.</div>
<div class="p-3 mb-2 bg-success text-white">Div con fondo verde (success) y texto blanco.</div>
```

**Personalización de color de borde y fondos para botones:**

```html
<button class="btn btn-outline-primary">Borde Azul</button>
<button class="btn btn-outline-danger">Borde Rojo</button>
<button class="btn btn-outline-success">Borde Verde</button>
```

---

## 7. Botones

**Botones avanzados y personalizados en Bootstrap**  
Bootstrap proporciona una variedad de clases para botones, incluyendo estilos de color, tamaños y variantes de borde.

**Ejemplos avanzados de botones:**

```html
<button class="btn btn-primary btn-lg">Botón Grande Azul</button>
<button class="btn btn-secondary btn-sm">Botón Pequeño Gris</button>
<button class="btn btn-success btn-lg btn-block">Botón Bloque Verde</button>
<button class="btn btn-danger disabled">Botón Rojo Deshabilitado</button>
```

**Botones con Iconos**  
Bootstrap permite agregar iconos de otras bibliotecas como Font Awesome o Bootstrap Icons para crear botones más visuales y accesibles.

```html
<!-- Usando Bootstrap Icons -->
<button class="btn btn-info">
    <i class="bi bi-info-circle"></i> Información
</button>

<button class="btn btn-warning">
    <i class="bi bi-exclamation-triangle"></i> Advertencia
</button>

<!-- Usando Font Awesome -->
<button class="btn btn-success">
    <i class="fas fa-check"></i> Aceptar
</button>

<button class="btn btn-danger">
    <i class="fas fa-times"></i> Cancelar
</button>
```

**Botones de Grupo**  
Bootstrap permite agrupar botones usando `.btn-group` para crear barras de herramientas, menús de opciones y otros elementos interactivos. Esto es útil para diseñar interfaces con opciones relacionadas.

```html
<div class="btn-group" role="group" aria-label="Grupo de botones básico">
    <button type="button" class="btn btn-primary">Izquierda</button>
    <button type="button" class="btn btn-secondary">Centro</button>
    <button type="button" class="btn btn-primary">Derecha</button>
</div>
```

**Botones de Grupo Verticales**  
También se pueden agrupar botones en una disposición vertical.

```html
<div class="btn-group-vertical" role="group" aria-label="Grupo de botones vertical">
    <button type="button" class="btn btn-dark">Arriba</button>
    <button type="button" class="btn btn-light">Medio</button>
    <button type="button" class="btn btn-dark">Abajo</button>
</div>
```

**Botones con Menús Desplegables**  
Bootstrap facilita la creación de botones con menús desplegables para opciones adicionales.

```html
<div class="btn-group">
    <button type="button" class="btn btn-primary">Acción</button>
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Acción 1</a></li>
        <li><a class="dropdown-item" href="#">Acción 2</a></li>
        <li><a class="dropdown-item" href="#">Acción 3</a></li>
    </ul>
</div>
```

**Botones con Spinner o Indicadores de Carga**  
Añadir un spinner a un botón puede indicar que una acción está en proceso, lo que mejora la experiencia del usuario.

```html
<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Cargando...
</button>
```
