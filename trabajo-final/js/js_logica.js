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

document.querySelector("#form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const fechaInicio = document.querySelector("#fecha_inicio").value;
  const fechaFin = document.querySelector("#fecha_fin").value;

  let fechaInicioDate = new Date(fechaInicio);
  let fechaFinDate = new Date(fechaFin);

  if (fechaInicioDate > fechaFinDate) {
    alert("La fecha de inicio debe ser antes que la fecha de fin.");
    return;
  }

  alert(
    `¡Gracias, ${nombre}! Hemos recibido tu solicitud para agendar una reunión entre el ${dias_semana[fechaInicioDate.getDay()]} ${fechaInicioDate.getDate()+1} de ${meses[fechaInicioDate.getMonth()]} y el ${dias_semana[fechaFinDate.getDay()]} ${fechaFinDate.getDate()+1} de ${meses[fechaFinDate.getMonth()]}.`
  );
});
