document.getElementById('form-contacto').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  
  alert(`¡Mensaje enviado, ${nombre}! \nPronto te contactaremos... en cuanto sepamos dónde vives 🕵️‍♂️💻`);
});
