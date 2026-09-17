const botonCoordenadas = document.querySelector("#boton-coordenadas");
const editor = document.querySelector("#editor");
const imagenPrincipal = document.querySelector("#imagen-principal");
const zonasPrincipales = document.querySelector("#zonas-principales");
const lienzoEditor = document.querySelector("#lienzo-editor");
const imagenEditor = document.querySelector("#imagen-editor");
const zonasEditor = document.querySelector("#zonas-editor");
const rectanguloTemporal = document.querySelector("#rectangulo-temporal");
// const selectorImagen = document.querySelector("#selector-imagen");
const selectorPersonaje = document.querySelector("#selector-personaje");
const formularioPersonaje = document.querySelector("#formulario-personaje");
const nombrePersonaje = document.querySelector("#nombre-personaje");
const borrarCoordenada = document.querySelector("#borrar-coordenada");
const limpiarCoordenadas = document.querySelector("#limpiar-coordenadas");
const salidaJson = document.querySelector("#salida-json");
const copiarJson = document.querySelector("#copiar-json");
const mensaje = document.querySelector("#mensaje");


let personajes = PERSONAJES_INICIALES.map((personaje) => (
  // console.log(personaje),
  // console.log(personaje.coordenadas ? { ...personaje.coordenadas } : null),
  {
  ...personaje,
  coordenadas: personaje.coordenadas ? { ...personaje.coordenadas } : null
  }
));

let indiceSeleccionado = 0;
let puntoInicial = null;
let editorVisible = false;
// let urlTemporal = null;

const convertirAPorcentaje = (coordenadas, imagen) => (
  console.log('imagen naturalWidth', imagen.naturalWidth),
  console.log('imagen naturalHeight', imagen.naturalHeight),
  {
  izquierda: (coordenadas.x / imagen.naturalWidth) * 100,
  arriba: (coordenadas.y / imagen.naturalHeight) * 100,
  ancho: (coordenadas.ancho / imagen.naturalWidth) * 100,
  alto: (coordenadas.alto / imagen.naturalHeight) * 100
});

const colocarRectangulo = (elemento, coordenadas, imagen) => {
  const porcentaje = convertirAPorcentaje(coordenadas, imagen);

  elemento.style.left = `${porcentaje.izquierda}%`;
  elemento.style.top = `${porcentaje.arriba}%`;
  elemento.style.width = `${porcentaje.ancho}%`;
  elemento.style.height = `${porcentaje.alto}%`;
};

const crearRectangulo = (personaje, imagen, esEnlace) => {
  const elemento = document.createElement(esEnlace ? "a" : "div");
  elemento.className = "rectangulo";
  elemento.innerHTML = `<span>${personaje.nombre}</span>`;

  if (esEnlace) {
    elemento.href = `personaje.html?nombre=${encodeURIComponent(personaje.nombre)}`;
    elemento.title = personaje.nombre;
  }

  colocarRectangulo(elemento, personaje.coordenadas, imagen);
  return elemento;
};

const dibujarZonas = () => {
  zonasPrincipales.innerHTML = "";
  zonasEditor.innerHTML = "";

  personajes.forEach((personaje) => {
    if (!personaje.coordenadas) return;

    zonasPrincipales.appendChild(crearRectangulo(personaje, imagenPrincipal, true));
    zonasEditor.appendChild(crearRectangulo(personaje, imagenEditor, false));
  });
};

const actualizarSelector = () => {
  selectorPersonaje.innerHTML = "";

  personajes.forEach((personaje, indice) => {
    const opcion = document.createElement("option");
    const estado = personaje.coordenadas ? "marcado" : "pendiente";

    opcion.value = indice;
    opcion.textContent = `${personaje.nombre} (${estado})`;
    selectorPersonaje.appendChild(opcion);
  });

  selectorPersonaje.value = indiceSeleccionado;
};

const actualizarJson = () => {
  const resultado = personajes
    .filter((personaje) => personaje.coordenadas)
    .map((personaje) => ({
      nombre: personaje.nombre,
      ...personaje.coordenadas,
      url: `personaje.html?nombre=${encodeURIComponent(personaje.nombre)}`
    }));

  salidaJson.value = JSON.stringify(resultado, null, 2);
};

const actualizarInterfaz = () => {
  dibujarZonas();
  actualizarSelector();
  actualizarJson();
};

const obtenerPunto = (evento) => {
  const limites = imagenEditor.getBoundingClientRect();
  const escalaX = imagenEditor.naturalWidth / limites.width;
  const escalaY = imagenEditor.naturalHeight / limites.height;

  const x = Math.round((evento.clientX - limites.left) * escalaX);
  const y = Math.round((evento.clientY - limites.top) * escalaY);

  return {
    x: Math.max(0, Math.min(x, imagenEditor.naturalWidth)),
    y: Math.max(0, Math.min(y, imagenEditor.naturalHeight))
  };
};

const mostrarRectanguloTemporal = (inicio, final) => {
  const coordenadas = {
    x: Math.min(inicio.x, final.x),
    y: Math.min(inicio.y, final.y),
    ancho: Math.abs(final.x - inicio.x),
    alto: Math.abs(final.y - inicio.y)
  };

  rectanguloTemporal.classList.remove("oculto");
  colocarRectangulo(rectanguloTemporal, coordenadas, imagenEditor);
};

botonCoordenadas.addEventListener("click", () => {
  editorVisible = !editorVisible;
  editor.classList.toggle("oculto", !editorVisible);
  botonCoordenadas.textContent = editorVisible
    ? "Ocultar coordenadas"
    : "Mostrar coordenadas";
});

selectorPersonaje.addEventListener("change", (evento) => {
  indiceSeleccionado = Number(evento.target.value);
  mensaje.textContent = `Seleccionado: ${personajes[indiceSeleccionado].nombre}.`;
});

formularioPersonaje.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = nombrePersonaje.value.trim();

  if (!nombre) return;

  personajes.push({
    nombre,
    pais: "Sin información",
    estilo: "Sin información",
    frase: "Nuevo personaje.",
    descripcion: "Edita datos.js para agregar su información.",
    coordenadas: null
  });

  indiceSeleccionado = personajes.length - 1;
  nombrePersonaje.value = "";
  mensaje.textContent = `Agregaste a ${nombre}. Ahora dibuja su rectángulo.`;
  actualizarInterfaz();
});

/*
selectorImagen.addEventListener("change", (evento) => {
  const archivo = evento.target.files[0];
  if (!archivo) return;

  if (urlTemporal) URL.revokeObjectURL(urlTemporal);
  urlTemporal = URL.createObjectURL(archivo);

  personajes = personajes.map((personaje) => ({
    ...personaje,
    coordenadas: null
  }));

  imagenPrincipal.src = urlTemporal;
  imagenEditor.src = urlTemporal;
  mensaje.textContent = `Imagen cargada: ${archivo.name}.`;
  imagenEditor.addEventListener("load", actualizarInterfaz, { once: true });
});
*/

lienzoEditor.addEventListener("pointerdown", (evento) => {
  if (evento.button !== 0) return;

  puntoInicial = obtenerPunto(evento);
  lienzoEditor.setPointerCapture(evento.pointerId);
  mostrarRectanguloTemporal(puntoInicial, puntoInicial);
});

lienzoEditor.addEventListener("pointermove", (evento) => {
  if (!puntoInicial) return;
  mostrarRectanguloTemporal(puntoInicial, obtenerPunto(evento));
});

lienzoEditor.addEventListener("pointerup", (evento) => {
  if (!puntoInicial) return;

  const puntoFinal = obtenerPunto(evento);
  const nuevasCoordenadas = {
    x: Math.min(puntoInicial.x, puntoFinal.x),
    y: Math.min(puntoInicial.y, puntoFinal.y),
    ancho: Math.abs(puntoFinal.x - puntoInicial.x),
    alto: Math.abs(puntoFinal.y - puntoInicial.y)
  };

  puntoInicial = null;
  rectanguloTemporal.classList.add("oculto");

  if (nuevasCoordenadas.ancho < 3 || nuevasCoordenadas.alto < 3) return;

  personajes[indiceSeleccionado].coordenadas = nuevasCoordenadas;
  mensaje.textContent = `Coordenadas guardadas para ${personajes[indiceSeleccionado].nombre}.`;
  actualizarInterfaz();
});

borrarCoordenada.addEventListener("click", () => {
  const personaje = personajes[indiceSeleccionado];
  personaje.coordenadas = null;
  mensaje.textContent = `Se borró la coordenada de ${personaje.nombre}.`;
  actualizarInterfaz();
});

limpiarCoordenadas.addEventListener("click", () => {
  personajes = personajes.map((personaje) => ({
    ...personaje,
    coordenadas: null
  }));

  mensaje.textContent = "Se limpiaron todas las coordenadas.";
  actualizarInterfaz();
});

copiarJson.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(salidaJson.value);
    mensaje.textContent = "JSON copiado.";
  } catch (error) {
    salidaJson.select();
    mensaje.textContent = "El JSON quedó seleccionado para copiarlo manualmente.";
  }
});

imagenPrincipal.addEventListener("load", dibujarZonas);
imagenEditor.addEventListener("load", actualizarInterfaz);

if (imagenEditor.complete) actualizarInterfaz();
