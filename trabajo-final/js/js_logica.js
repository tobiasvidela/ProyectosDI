const dias_semana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
]
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]

const nombre = document.querySelector("#nombre").value;
const fechaInicioInput = document.querySelector("#fecha_inicio");
const fechaFinInput = document.querySelector("#fecha_fin");
const checkboxesCubos = document.querySelectorAll('input[name="tipos_cubos[]"]');
const seleccionarTodosLosCubos = document.querySelector('#seleccionar_todo');

/*    FUNCIONALIDAD     */
//  FECHAS
function establecerFechaMinima() {
  // Obtener fecha estándar y eliminar la hora
  const hoy = new Date().toISOString().split('T')[0];
  fechaInicioInput.min = hoy;
  fechaFinInput.min = hoy;
}

function validarRangoFechas() {
  const fechaInicio = new Date(fechaInicioInput.value);
  const fechaFin = new Date(fechaFinInput.value);

  // Validar que fecha fin sea mayor o igual a fecha inicio
  if (fechaInicio > fechaFin) {
    fechaFinInput.value = fechaInicioInput.value;
  }
}

function actualizarFechaFin() {
  // Actualizar fecha fin cuando cambia fecha inicio
  if (!fechaFinInput.value || new Date(fechaFinInput.value) < new Date(fechaInicioInput.value)) {
    fechaFinInput.value = fechaInicioInput.value;
  }
}
//  CHECKBOXES
function validarSeleccionCubos() {
  // Contar cuántos checkboxes están seleccionados
  const checkboxesSeleccionados = 
    Array.from(checkboxesCubos).filter(checkbox => checkbox.checked).length;

  return checkboxesSeleccionados >= 2;
}

function mostrarErrorCheckbox() {
  const checkboxContainer = document.querySelector('.checkbox-container');
  
  // Eliminar mensaje de error previo si existe
  const errorExistente = checkboxContainer.querySelector('.error-mensaje');
  if (errorExistente) {
    errorExistente.remove();
  }

  // Si no hay suficientes checkboxes seleccionados, mostrar mensaje
  if (!validarSeleccionCubos()) {
    const errorMensaje = document.createElement('p');
    errorMensaje.textContent = 'Debes seleccionar al menos 2 tipos de cubos';
    errorMensaje.classList.add('error-mensaje');
    errorMensaje.style.color = 'red';
    checkboxContainer.appendChild(errorMensaje);
    return false;
  }
  
  return true;
}

/* EVENTOS */
// FECHAS
fechaInicioInput.addEventListener('change', actualizarFechaFin);
fechaFinInput.addEventListener('change', validarRangoFechas);

// CHECKBOXES
seleccionarTodosLosCubos.addEventListener('change', function() {
  checkboxesCubos.forEach(checkbox => {
    checkbox.checked = this.checked;
  });
});

checkboxesCubos.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    seleccionarTodosLosCubos.checked = 
      Array.from(checkboxesCubos).every(cb => cb.checked);
  });
});

checkboxesCubos.forEach(checkbox => {
  checkbox.addEventListener('change', mostrarErrorCheckbox);
});

// Mostrar mensaje al ususario cuando haga sumbit
document.querySelector("#form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Mensaje al usuario
});

/* INICIALIZACIONES */
establecerFechaMinima();