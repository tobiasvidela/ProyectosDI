// Función que verifica si un número es primo (del ejercicio anterior)
function esPrimo(numero) {
  if (numero <= 1) return false;
  if (numero === 2) return true;
  if (numero % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Función para validar la entrada del usuario
function obtenerCantidadPrimos() {
  let n;
  let esValido = false;
  
  while (!esValido) {
    // Pedir el número al usuario
    const entrada = prompt('Ingrese un número entre 1 y 10:');
    
    // Convertir a número y validar
    n = parseInt(entrada);
    
    // Verificar si es un número válido
    if (isNaN(n)) {
      alert('Error: Debe ingresar un número válido');
    }
    // Verificar si está en el rango correcto
    else if (n < 1 || n > 10) {
      alert('Error: El número debe estar entre 1 y 10');
    }
    else {
      esValido = true;
    }
  }
  
  return n;
}

// Función para encontrar los primeros n números primos
function encontrarPrimerosPrimos(n) {
  const primos = [];
  let numero = 2;  // Empezamos desde el primer número primo
  
  // Mientras no hayamos encontrado suficientes primos
  while (primos.length < n) {
    if (esPrimo(numero)) {
      primos.push(numero);
    }
    numero++;
  }
  
  return primos;
}

// Función principal que ejecuta todo el programa
function ejecutarPrograma() {
  // Obtener la cantidad de números primos a buscar
  const n = obtenerCantidadPrimos();
  
  // Encontrar los números primos
  const primos = encontrarPrimerosPrimos(n);
  
  // Mostrar resultados
  alert(`Los primeros ${n} números primos son: ${primos.join(', ')}`);
  
  // También mostramos en consola para mejor visualización
  console.log(`Cantidad solicitada: ${n}`);
  console.log('Números primos encontrados:', primos);
}

// Ejecutar el programa
ejecutarPrograma();