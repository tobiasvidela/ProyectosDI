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

const fechaInicioInput = document.querySelector("#fecha_inicio");
const fechaFinInput = document.querySelector("#fecha_fin");
const checkboxesCubos = document.querySelectorAll('input[name="tipos_cubos[]"]');
const seleccionarTodosLosCubos = document.querySelector('#seleccionar_todo');
const camposValidar = document.querySelectorAll('input[type="text"], input[type="number"], input[type="email"], textarea');

/*    FUNCIONALIDAD     */
//  FECHAS
function establecerFechaMinima() {
  // Obtener fecha estándar y eliminar la hora
  const hoy = new Date().toISOString().split('T')[0];
  fechaInicioInput.min = hoy;
  fechaFinInput.min = hoy;
}

function actualizarFechaInicio() {
  if (!fechaFinInput || !fechaInicioInput.value || new Date(fechaInicioInput.value) > new Date(fechaFinInput.value)) {
    fechaInicioInput.value = fechaFinInput.value;
  }
}

function actualizarFechaFin() {
  if (!fechaFinInput.value || !fechaInicioInput.value || new Date(fechaFinInput.value) < new Date(fechaInicioInput.value)) {
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

// VALIDAR CAMPOS
function validarCampo(campo) {
  // Eliminar espacios al inicio y final
  const valorTrimmed = campo.value.trim();

  if (valorTrimmed === '') {
    // Crear mensaje de error si no existe
    let errorMensaje = campo.nextElementSibling;
    if (!errorMensaje || !errorMensaje.classList.contains('error-mensaje')) {
      errorMensaje = document.createElement('p');
      errorMensaje.classList.add('error-mensaje');
      errorMensaje.style.color = 'red';
      campo.parentNode.insertBefore(errorMensaje, campo.nextSibling);
    }

    // Establecer mensaje de error específico según el tipo de campo
    switch(campo.id) {
      case 'nombre':
        errorMensaje.textContent = 'Por favor, ingresa tu nombre';
        break;
      case 'edad':
        errorMensaje.textContent = 'Por favor, ingresa tu edad';
        break;
      case 'telefono':
        errorMensaje.textContent = 'Por favor, ingresa tu número de teléfono';
        break;
      case 'email':
        errorMensaje.textContent = 'Por favor, ingresa tu correo electrónico';
        break;
      case 'mensaje':
        errorMensaje.textContent = 'Por favor, escribe un mensaje';
        break;
      default:
        errorMensaje.textContent = 'Este campo no puede estar vacío';
    }

    // Establecer foco en el campo
    campo.focus();
    return false;
  } else {
    // Eliminar mensaje de error si existe
    const errorMensaje = campo.nextElementSibling;
    if (errorMensaje && errorMensaje.classList.contains('error-mensaje')) {
      errorMensaje.remove();
    }
    return true;
  }
}

/* EVENTOS */
// FECHAS
fechaInicioInput.addEventListener('change', actualizarFechaFin);
fechaFinInput.addEventListener('change', actualizarFechaInicio);

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

// CAMPOS DE TEXTO Y NÚMERO
camposValidar.forEach(campo => {
  campo.addEventListener('blur', function() {
    validarCampo(this);
  });
});

// Mostrar mensaje al ususario cuando haga sumbit
document.querySelector("#form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Mensaje al usuario
});

/* INICIALIZACIONES */
establecerFechaMinima();