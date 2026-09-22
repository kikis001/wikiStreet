// Este arreglo contiene la información que se muestra en personaje.html.
// "coordenadas" usa píxeles de la imagen original: x, y, ancho y alto.
// Para el carrusel puedes agregar: imagenes: ["ruta-1", "ruta-2", "ruta-3"].
const PERSONAJES_INICIALES = [
  {
    nombre: "Blanka",
    pais: "Brasil",
    estilo: "Ataques eléctricos",
    frase: "La fuerza de la selva.",
    descripcion: "Blanka es un luchador ágil que combina movimientos salvajes con electricidad.",
    imagenes: [
      "assets/personajes/blanka/blanka1.png",
      "assets/personajes/blanka/blanka2.png",
      "assets/personajes/blanka/blanka3.png",
    ],
    coordenadas: { x: 350, y: 336, ancho: 172, alto: 185 }
  },
  {
    nombre: "Zangief",
    pais: "Rusia",
    estilo: "Lucha libre",
    frase: "El ciclón rojo.",
    descripcion: "Zangief basa su combate en la fuerza, los agarres y los lanzamientos.",
    imagenes: [
      "assets/personajes/zangief/zangief1.png",
      "assets/personajes/zangief/zangief2.png",
      "assets/personajes/zangief/zangief3.png",
    ],
    coordenadas: { x: 85, y: 204, ancho: 126, alto: 111 }
  },
  {
    nombre: "Ryu",
    pais: "Japón",
    estilo: "Artes marciales",
    frase: "Siempre en busca de un nuevo reto.",
    descripcion: "Ryu es un peleador disciplinado que viaja para mejorar su técnica.",
    imagenes: [
      "assets/personajes/ryu/ryu1.png",
      "assets/personajes/ryu/ryu2.png",
      "assets/personajes/ryu/ryu3.png",
    ],
    coordenadas: { x: 228, y: 444, ancho: 237, alto: 254 }
  },
  {
    nombre: "Chun-Li",
    pais: "China",
    estilo: "Kung-fu",
    frase: "Velocidad y justicia.",
    descripcion: "Chun-Li destaca por su rapidez y sus poderosas técnicas de patadas.",
    imagenes: [
      "assets/personajes/chun-li/chun-li1.png",
      "assets/personajes/chun-li/chun-li2.png",
      "assets/personajes/chun-li/chun-li3.png",
    ],
    coordenadas: { x: 220, y: 193, ancho: 129, alto: 248 }
  },
  {
    nombre: "Ken",
    pais: "Estados Unidos",
    estilo: "Artes marciales",
    frase: "Combate con energía y confianza.",
    descripcion: "Ken es un luchador veloz y ofensivo, además de amigo y rival de Ryu.",
    imagenes: [
      "assets/personajes/ken/ken1.png",
      "assets/personajes/ken/ken2.png",
      "assets/personajes/ken/ken3.png",
    ],
    coordenadas: { x: 21, y: 321, ancho: 184, alto: 131 }
  },
  {
    nombre: "Cammy",
    pais: "Reino Unido",
    estilo: "Combate especial",
    frase: "Precisión en cada movimiento.",
    descripcion: "Cammy utiliza ataques rápidos, directos y acrobáticos.",
    coordenadas: null
  },
  {
    nombre: "Sagat",
    pais: "Tailandia",
    estilo: "Muay Thai",
    frase: "El emperador del Muay Thai.",
    descripcion: "Sagat es un peleador alto y poderoso especializado en Muay Thai.",
    imagenes: [
      "assets/personajes/sagat/sagat1.png",
      "assets/personajes/sagat/sagat2.png",
      "assets/personajes/sagat/sagat3.png",
    ],
    coordenadas: { x: 349, y: 48, ancho: 114, alto: 152 }
  },
  {
    nombre: "M. Bison",
    pais: "Desconocido",
    estilo: "Psycho Power",
    frase: "El líder de Shadaloo.",
    descripcion: "M. Bison utiliza una energía conocida como Psycho Power.",
    imagenes: [
      "assets/personajes/m-bison/mbison1.png",
      "assets/personajes/m-bison/mbison2.png",
      "assets/personajes/m-bison/mbison3.png",
    ],
    coordenadas: { x: 189, y: 16, ancho: 160, alto: 134 }
  },
  {
    nombre: "Vega",
    pais: "España",
    estilo: "Ninjutsu español",
    frase: "Velocidad y agilidad.",
    descripcion: "Vega pelea con gran velocidad y utiliza una garra metálica.",
    imagenes: [
      "assets/personajes/vega/vega1.png",
      "assets/personajes/vega/vega2.png",
      "assets/personajes/vega/vega3.png",
    ],
    coordenadas: { x: 49, y: 35, ancho: 200, alto: 146 }
  },
  {
    nombre: "Dhalsim",
    pais: "India",
    estilo: "Yoga",
    frase: "Mente y cuerpo en equilibrio.",
    descripcion: "Dhalsim utiliza técnicas de yoga y ataques de largo alcance.",
    imagenes: [
      "assets/personajes/dhalsim/dhalsim1.png",
      "assets/personajes/dhalsim/dhalsim2.png",
      "assets/personajes/dhalsim/dhalsim3.png",
    ],
    coordenadas: { x: 9, y: 151, ancho: 125, alto: 133 }
  },
  {
    nombre: "Barlog",
    pais: "Estados Unidos",
    estilo: "Boxeo",
    frase: "Fuerza en cada golpe.",
    descripcion: "Barlog es un boxeador que basa su combate en golpes fuertes y directos.",
    imagenes: [
      "assets/personajes/barlog/barlog1.png",
      "assets/personajes/barlog/barlog2.png",
      "assets/personajes/barlog/barlog3.png",
    ],
    coordenadas: { x: 313, y: 233, ancho: 204, alto: 81 }
  },
  {
    nombre: "Guile",
    pais: "Estados Unidos",
    estilo: "Combate militar",
    frase: "Disciplina y estrategia.",
    descripcion: "Guile utiliza técnicas militares y ataques como el Sonic Boom.",
    imagenes: [
      "assets/personajes/guile/guile1.png",
      "assets/personajes/guile/guile2.png",
      "assets/personajes/guile/guile3.png",
    ],
    coordenadas: { x: 32, y: 396, ancho: 212, alto: 234 }
  },
  {
    nombre: "E. Honda",
    pais: "Japón",
    estilo: "Sumo",
    frase: "El orgullo del sumo.",
    descripcion: "E. Honda utiliza movimientos de sumo y rápidos golpes con las manos.",
    imagenes: [
      "assets/personajes/e-honda/e-honda1.png",
      "assets/personajes/e-honda/e-honda2.png",
      "assets/personajes/e-honda/e-honda3.png",
    ],
    coordenadas: { x: 323, y: 143, ancho: 107, alto: 90 }
  }
];
