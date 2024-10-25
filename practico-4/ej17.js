// Variables
let nombres = [
  "Xandor", "Lyana", "Brion", "Kirael", "Zariel", 
  "Jorvik", "Eldira", "Tyros", "Malira", "Yorwen", 
  "Quintar", "Sirena", "Volkir", "Nivara", "Luneth", 
  "Ragnar", "Esmeris", "Theron", "Vindra", "Kelios"
];

let apellidos = [
  "Drakemont", "Windspire", "Ironfist", "Stormhaven", "Nightshade", 
  "Thornwood", "Starfire", "Duskwater", "Blazeborn", "Moonstone", 
  "Ravenshade", "Thornhill", "Silverhorn", "Brightforge", "Shadowveil", 
  "Oakenshield", "Firecrest", "Deepforge", "Wintervale", "Frostbane"
];

let calles = [
  "Avenida Aurora", "Calle del Silencio", "Paseo del Amanecer", "Bulevar Estelar", "Calle de los Susurros", 
  "Camino del Crepúsculo", "Callejón Esmeralda", "Avenida de los Robles", "Calle Luminosa", "Camino Sombrío", 
  "Bulevar del Horizonte", "Paseo del Solsticio", "Calle de los Sueños", "Avenida del Ocaso", "Calle Brillante", 
  "Camino del Alba", "Callejón Oculto", "Avenida de los Cipreses", "Paseo de las Nubes", "Calle de las Mariposas"
];

let dominios = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com"
]

// Funcionalidades
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateDNI(min, max) {
  return getRandomNumber(min, max);
}

function chooseApellido() {
  return apellidos[getRandomNumber(0, apellidos.length)];
}

function chooseNombre() {
  return nombres[getRandomNumber(0, nombres.length)];
}

function chooseCalle() {
  return calles[getRandomNumber(0, calles.length)];
}

function generateNroCalle(min, max) {
  return getRandomNumber(min, max);
}

function generateEdad(min, max) {
  return getRandomNumber(min, max);
}

function generateEmail(apellido, nombre) {
  // concatenación del apellido, un “.” (punto) ,el nombre, luego “@” y por último podrá ser gmail.com, yahoo.com o hotmail.com (generarlo al azar con un número del 1 al 3)
  return apellido + '.' + nombre + '@' + dominios[getRandomNumber(1, 3) - 1];
}

function generarPersona() {
  let apellido = chooseApellido();
  let nombre = chooseNombre();
  return {
    dni: generateDNI(10000000, 99999999),
    apellido: apellido,
    nombre: nombre,
    direccion: chooseCalle() + ' ' + generateNroCalle(1, 2000),
    edad: generateEdad(0, 100),
    email: generateEmail(apellido, nombre)
  }
}
