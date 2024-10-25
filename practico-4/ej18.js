function generarPersonas() {
  let n = document.getElementById('numeroPersonas').value;
  let personas = [];
  
  for (let i = 0; i < n; i++) {
    personas.push(generarPersona());
  }
  
  document.getElementById('output').textContent = JSON.stringify(personas, null, 2);
}
