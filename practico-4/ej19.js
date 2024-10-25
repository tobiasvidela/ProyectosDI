// Tomamos el valor de 'output' y lo parseamos a un arreglo de objetos
const personasJSON = document.getElementById('output').textContent;
const personas = JSON.parse(personasJSON); // Parseamos el JSON a un arreglo de objetos

function pedirDNI() {
  let DNI_ingresado = Number.parseInt(prompt('Ingrese el DNI a buscar:'));

  // Validamos que el DNI sea un número válido
  while (DNI_ingresado < 10000000 || DNI_ingresado > 99999999 || isNaN(DNI_ingresado) || null) {
    DNI_ingresado = Number.parseInt(prompt('Ingrese un DNI válido:'));
  }
}

function mostrarPersona(persona) {
  alert(`
    Persona encontrada:
    \nNombre: ${persona.nombre}
    \nApellido: ${persona.apellido}
    \nDNI: ${persona.dni}
    \nDirección: ${persona.direccion}
    \nEdad: ${persona.edad}
    \nEmail: ${persona.email}
    `);
}

function buscarPorDNI() {
  let DNI_ingresado = pedirDNI();

  // Buscamos en el arreglo de personas
  for (let persona of personas) {
    if (DNI_ingresado === persona.dni) {
      mostrarPersona(persona);
      return;
    }
  }
  
  // Si no se encontró la persona
  alert(`No existe una persona con el DNI ingresado: ${DNI_ingresado}`);
}
