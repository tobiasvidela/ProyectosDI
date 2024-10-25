function eliminarPersona() {
  // Obtenemos el valor del 'output' en JSON y lo parseamos a un arreglo de objetos
  const personasJSON = document.getElementById('output').textContent;
  let personas = JSON.parse(personasJSON); // Parseamos el JSON a un arreglo de objetos

  let DNI_ingresado = Number.parseInt(prompt('Ingrese el DNI de la persona a eliminar:'));

  // Validamos que el DNI sea un número válido
  while (DNI_ingresado < 10000000 || DNI_ingresado > 99999999 || isNaN(DNI_ingresado)) {
    DNI_ingresado = Number.parseInt(prompt('Ingrese un DNI válido:'));
  }

  // Buscar la persona en el arreglo
  const index = personas.findIndex(persona => persona.dni === DNI_ingresado);

  if (index === -1) {
    // Si no se encontró la persona
    alert(`No existe una persona con el DNI ingresado: ${DNI_ingresado}`);
  } else {
    // Si se encontró, confirmamos si desea eliminar
    const persona = personas[index];
    const confirmacion = confirm(`¿Está seguro de que desea eliminar a ${persona.apellido} ${persona.nombre}?`);

    if (confirmacion) {
      // Eliminamos a la persona usando splice()
      personas.splice(index, 1);
      alert('Persona eliminada correctamente.');

      // Actualizamos el contenido de 'output' para reflejar los cambios
      document.getElementById('output').textContent = JSON.stringify(personas, null, 2);
    }
  }
}
