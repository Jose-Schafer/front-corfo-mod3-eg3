import '../scss/styles.scss'
import { AppointmentStack, createDoctorListItemHTML, capitalizeAllAttributes, createUpcommingAppointmentItemHTML } from './components/appointments';
import { fetchDoctorData } from './api/doctors';

const message = () => {
  // Create a toast container if it doesn't already exist
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  // Create the toast element
  const toast = document.createElement('div');
  toast.className = 'toast align-items-center text-bg-success border-0';
  toast.role = 'alert';
  toast.ariaLive = 'assertive';
  toast.ariaAtomic = 'true';
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        Tu cita fue agendada correctamente.
      </div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  // Append the toast to the container
  toastContainer.appendChild(toast);

  // Initialize and show the toast using Bootstrap's JavaScript
  const bootstrapToast = new bootstrap.Toast(toast);
  bootstrapToast.show();

  // Remove the toast after it's hidden
  toast.addEventListener('hidden.bs.toast', () => {
    toast.remove();
  });
}

//const appointmentStack = new AppointmentStack(message);

// Función para cargar especialidades en el dropdown

async function populateSpecialtiesDropdown() {
  try {
    const especialistasPromise = fetchDoctorData('../../public/static/json/especialistas.json');
    const generalesPromise = fetchDoctorData('../../public/static/json/generales.json');

    const [especialistas, generales] = await Promise.all([especialistasPromise, generalesPromise]);

    // Obtener especialidades únicas
    const allSpecialties = [...especialistas, ...generales].map(doctor => doctor.specialty);
    const uniqueSpecialties = [...new Set(allSpecialties)];

    // Agregar especialidades al dropdown
    const specialtyDropdown = document.getElementById('specialtyDropdown');
    uniqueSpecialties.forEach(specialty => {
      const option = document.createElement('option');
      option.value = specialty.toLowerCase();
      option.textContent = specialty;
      specialtyDropdown.appendChild(option);
    });
  } catch (error) {
    console.log("Error al cargar las especialidades:", error.message);
  }
}

// Función para filtrar y cargar doctores en el dropdown según la especialidad seleccionada
async function populateDoctorsDropdown(selectedSpecialty) {
  try {
    const especialistasPromise = fetchDoctorData('../../public/static/json/especialistas.json');
    const generalesPromise = fetchDoctorData('../../public/static/json/generales.json');

    const [especialistas, generales] = await Promise.all([especialistasPromise, generalesPromise]);

    // Unir todos los doctores
    const allDoctors = [...especialistas, ...generales];

    // Filtrar doctores según la especialidad seleccionada
    const filteredDoctors = selectedSpecialty === 'todos'
      ? allDoctors
      : allDoctors.filter(doctor => doctor.specialty.toLowerCase() === selectedSpecialty);

    // Actualizar el dropdown de doctores
    const doctorDropdown = document.getElementById('doctorDropdownMenu');
    doctorDropdown.innerHTML = ''; // Limpiar opciones anteriores

    filteredDoctors.forEach(doctor => {
      const option = document.createElement('option');
      option.value = doctor.name;
      option.textContent = `${doctor.name} (${doctor.specialty})`;
      doctorDropdown.appendChild(option);
    });
  } catch (error) {
    console.log("Error al cargar doctores:", error.message);
  }
}

// Configurar eventos para los dropdowns
document.addEventListener('DOMContentLoaded', async () => {
  await populateSpecialtiesDropdown(); // Cargar especialidades inicialmente

  // Filtrar doctores cuando se seleccione una especialidad
  const specialtyDropdown = document.getElementById('specialtyDropdown');
  specialtyDropdown.addEventListener('change', (event) => {
    const selectedSpecialty = event.target.value;
    populateDoctorsDropdown(selectedSpecialty);
  });

  // Cargar todos los doctores por defecto
  populateDoctorsDropdown('todos');
});


document.addEventListener('DOMContentLoaded', renderDoctorList);
document.addEventListener('DOMContentLoaded', renderUpcommingAppointmentList);
const sendButton = document.getElementById('contactFormSendButton');
sendButton.addEventListener('click', contactFormSend);
