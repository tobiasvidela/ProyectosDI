function priceToggle(elemento) {
  const precio = elemento.querySelector('.precio');

  if (precio.classList.contains('visible')) {
    precio.classList.remove('visible');
  } else {
    precio.classList.add('visible');
  }
}