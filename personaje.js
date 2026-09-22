const parametros = new URLSearchParams(window.location.search);
const nombreSolicitado = parametros.get("nombre") || "Personaje desconocido";

const personaje = PERSONAJES_INICIALES.find(
  (item) => item.nombre.toLowerCase() === nombreSolicitado.toLowerCase()
);

const datos = personaje || {
  nombre: nombreSolicitado,
  pais: "Sin información",
  estilo: "Sin información",
  frase: "Este personaje todavía no tiene una ficha.",
  descripcion: "Puedes agregar sus datos en el arreglo PERSONAJES_INICIALES del archivo datos.js."
};

document.title = `${datos.nombre} | Mapa de personajes`;
document.querySelector("#detalle-nombre").textContent = datos.nombre;
document.querySelector("#detalle-frase").textContent = datos.frase;
document.querySelector("#detalle-pais").textContent = datos.pais;
document.querySelector("#detalle-estilo").textContent = datos.estilo;
document.querySelector("#detalle-descripcion").textContent = datos.descripcion;

const indicadoresCarrusel = document.querySelector("#indicadores-carrusel");
const imagenesCarrusel = document.querySelector("#imagenes-carrusel");
const imagenes = datos.imagenes?.length
  ? datos.imagenes
  : ["assets/street-fighter.png"];

imagenes.forEach((rutaImagen, indice) => {
  const indicador = document.createElement("button");
  indicador.type = "button";
  indicador.dataset.bsTarget = "#carrusel-personaje";
  indicador.dataset.bsSlideTo = indice;
  indicador.setAttribute("aria-label", `Imagen ${indice + 1}`);

  if (indice === 0) {
    indicador.classList.add("active");
    indicador.setAttribute("aria-current", "true");
  }

  indicadoresCarrusel.appendChild(indicador);

  const diapositiva = document.createElement("div");
  diapositiva.className = "carousel-item h-100";
  if (indice === 0) diapositiva.classList.add("active");

  const contenido = document.createElement("div");
  contenido.className = "carrusel-contenido";

  const imagen = document.createElement("img");
  imagen.src = rutaImagen;
  imagen.alt = `${datos.nombre}, imagen ${indice + 1}`;

  contenido.appendChild(imagen);
  diapositiva.appendChild(contenido);
  imagenesCarrusel.appendChild(diapositiva);
});
