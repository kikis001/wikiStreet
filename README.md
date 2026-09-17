# Mapa de personajes

Este proyecto utiliza HTML, CSS y JavaScript ES6 para marcar personajes dentro de una imagen. Cada zona marcada puede abrir la página de información del personaje.

## Elementos principales de JavaScript

### `document.querySelector()`

Selecciona un elemento del HTML para utilizarlo desde JavaScript.

```javascript
const boton = document.querySelector("#boton-coordenadas");
```

El símbolo `#` selecciona un elemento por su `id`. Por ejemplo, `#boton-coordenadas` busca `id="boton-coordenadas"`.

### `const` y `let`

`const` declara una variable que no será reemplazada. `let` se utiliza cuando su valor puede cambiar.

```javascript
const imagen = document.querySelector("#imagen-editor");
let editorVisible = false;
```

### Funciones flecha

Una función agrupa instrucciones que pueden ejecutarse cuando sean necesarias.

```javascript
const actualizarInterfaz = () => {
  dibujarZonas();
  actualizarSelector();
  actualizarJson();
};
```

### `addEventListener()`

Escucha eventos realizados por el usuario o por el navegador.

```javascript
boton.addEventListener("click", () => {
  // Código que se ejecuta al hacer clic.
});
```

Los eventos utilizados en el proyecto son:

`click`: se ejecuta al presionar un botón.

`change`: se ejecuta cuando cambia la opción de un menú desplegable.

`submit`: se ejecuta cuando se envía un formulario.

`pointerdown`: se ejecuta al comenzar a presionar sobre la imagen.

`pointermove`: se ejecuta mientras se mueve el puntero sobre la imagen.

`pointerup`: se ejecuta al dejar de presionar.

`load`: se ejecuta cuando una imagen termina de cargar.

### `document.createElement()`

Crea un elemento HTML desde JavaScript.

```javascript
const opcion = document.createElement("option");
```

Este ejemplo crea una nueva opción para el menú desplegable.

### `.innerHTML`

Agrega contenido HTML dentro de un elemento.

```javascript
elemento.innerHTML = `<span>${personaje.nombre}</span>`;
```

### `.textContent`

Agrega solamente texto, sin interpretar etiquetas HTML.

```javascript
mensaje.textContent = "Coordenadas guardadas";
```

### `.appendChild()`

Agrega un elemento dentro de otro elemento HTML.

```javascript
selectorPersonaje.appendChild(opcion);
```

En este caso agrega una opción dentro del menú desplegable.

### `.classList.toggle()`

Agrega o elimina una clase CSS dependiendo de una condición.

```javascript
editor.classList.toggle("oculto", !editorVisible);
```

La clase `oculto` utiliza `display: none` para esconder el editor.

### Arreglos

`forEach()` recorre todos los elementos de un arreglo.

```javascript
personajes.forEach((personaje) => {
  // Se ejecuta una vez por personaje.
});
```

`filter()` crea un arreglo con los elementos que cumplen una condición.

```javascript
personajes.filter((personaje) => personaje.coordenadas);
```

`map()` crea un arreglo nuevo transformando sus elementos.

```javascript
personajes.map((personaje) => ({
  nombre: personaje.nombre,
  coordenadas: personaje.coordenadas
}));
```

### Operador de propagación

`...` copia las propiedades de un objeto.

```javascript
const copia = { ...personaje };
```

### `JSON.stringify()`

Convierte un arreglo u objeto de JavaScript en texto JSON.

```javascript
salidaJson.value = JSON.stringify(resultado, null, 2);
```

El número `2` agrega espacios para que el JSON sea fácil de leer.

### `encodeURIComponent()`

Prepara un texto para colocarlo dentro de una URL.

```javascript
encodeURIComponent("M. Bison");
```

El resultado es `M.%20Bison`, porque `%20` representa el espacio.

### `naturalWidth` y `naturalHeight`

Indican el ancho y alto originales de una imagen.

```javascript
imagen.naturalWidth;
imagen.naturalHeight;
```

Se utilizan para convertir las coordenadas en píxeles a porcentajes. Así los rectángulos mantienen su posición cuando la imagen cambia de tamaño.

## Funciones del proyecto

### `convertirAPorcentaje()`

Convierte `x`, `y`, `ancho` y `alto` de píxeles a porcentajes según el tamaño original de la imagen.

### `colocarRectangulo()`

Aplica al rectángulo los valores CSS `left`, `top`, `width` y `height`.

### `crearRectangulo()`

Crea el elemento que representa una zona. En la imagen principal crea un enlace `<a>` y en el editor crea un `<div>`. También agrega el nombre, la URL y la posición del personaje.

### `dibujarZonas()`

Recorre los personajes y dibuja los rectángulos de aquellos que tienen coordenadas.

### `actualizarSelector()`

Limpia y vuelve a llenar el menú desplegable con los nombres de los personajes. También indica si cada personaje está marcado o pendiente.

### `actualizarJson()`

Selecciona los personajes que tienen coordenadas y genera el JSON mostrado en el formulario.

### `actualizarInterfaz()`

Actualiza al mismo tiempo los rectángulos, el menú desplegable y el resultado JSON.

### `obtenerPunto()`

Obtiene la posición del mouse dentro de la imagen y la convierte a coordenadas de la imagen original.

### `mostrarRectanguloTemporal()`

Muestra el rectángulo mientras el usuario arrastra el mouse. Al terminar el arrastre, las coordenadas se asignan al personaje seleccionado.

## Archivos

`index.html` contiene la imagen, los botones y el formulario.

`datos.js` contiene los nombres, la información y las coordenadas predeterminadas.

`app.js` contiene la lógica para dibujar, editar y generar el JSON.

`styles.css` coloca los rectángulos sobre la imagen y agrega el efecto hover.

`personaje.html` contiene la estructura de la ficha individual.

`personaje.js` obtiene el nombre enviado en la URL y muestra la información correspondiente.
