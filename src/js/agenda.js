import "../scss/styles.scss";
import {
  AppointmentStack,
  createAppointmentListItemHTML,
} from "./components/appointments";

const appointmentStack = new AppointmentStack(renderAppointmentList);

function getSelectedAppointmentList() {
  // Obtener la lista de citas según la opción seleccionada
  const allAppointmentsOption = document.getElementById("option1");
  if (allAppointmentsOption?.checked) {
    return appointmentStack.stack;
  }

  const lastCreatedAppointmentOption = document.getElementById("option2");
  if (lastCreatedAppointmentOption?.checked) {
    return [appointmentStack.getLastCreatedAppointment()].filter(Boolean);
  }

  const upcomingCreatedAppointmentOption = document.getElementById("option3");
  if (upcomingCreatedAppointmentOption?.checked) {
    return [appointmentStack.getUpcommingAppointment()].filter(Boolean);
  }

  return [];
}

function renderAppointmentList() {
  const container = document.getElementById("appointment-list");

  const stack = getSelectedAppointmentList();
  console.log("Citas en la pila:", stack);

  if (container) {
    container.innerHTML = "";

    stack.forEach((appointment, index) => {
      if (appointment) {
        const appointmentItem = createAppointmentListItemHTML(
          appointment,
          index,
          (i) => {
            appointmentStack.removeAt(i);
            renderAppointmentList();
          }
        );
        container.appendChild(appointmentItem);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderAppointmentList();

  // Actualizar la lista al cambiar las opciones
  document.querySelectorAll('input[name="options"]').forEach((radio) => {
    radio.addEventListener("change", renderAppointmentList);
  });
});





// Función para simular la creación de una cita
async function createAppointmentAsync(appointment) {
  try {
    console.log("Procesando la cita...");
    // Simular un retraso en el registro de la cita
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simular la inserción de la cita en la pila
    appointmentStack.push(appointment);
    console.log("Cita creada exitosamente:", appointment);

    // Renderizar la lista actualizada de citas
    renderAppointmentList();
  } catch (error) {
    console.error("Error al crear la cita:", error);
  }
}

// Crear un ejemplo de cita con datos reales
const createButton = document.getElementById("create-appointment-button");
createButton?.addEventListener("click", () => {
  const newAppointment = {
    id: Date.now(),
    name: "Consulta médica",
    doctor: "Dr. Pérez",
    patient: "Juan Pérez",
    specialty: "Cardiología",
    date: new Date().toLocaleString(),
  };

  createAppointmentAsync(newAppointment);
});
