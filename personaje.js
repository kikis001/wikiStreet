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
