function invertirCadena(cadena) {
  return [...cadena].reverse().join('');
}

function procesarCadena() {
  // Pedir la cadena al usuario
  let cadena;
  do {
    cadena = prompt('Por favor, ingrese una cadena de texto:');
    if (cadena.trim() === '') {
      alert('Error: Debe ingresar una cadena no vacía');
    }
  } while (cadena.trim() === '');
  
  // Invertir la cadena usando el método básico
  const resultado = invertirCadena(cadena);
  
  // Mostrar el resultado
  alert(`Cadena original: "${cadena}"\nCadena invertida: "${resultado}"`);
}

// Ejecutar el programa principal
procesarCadena();