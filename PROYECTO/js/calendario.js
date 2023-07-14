// Obtener todos los elementos td
const days = document.querySelectorAll('td');

// Crear un objeto que contenga información de plantas
const plants = {
    '01-01': 'Día de Año Nuevo',
    '03-21': 'Día Internacional de la Diversidad Biológica',
    '05-22': 'Día Internacional de la Diversidad Biológica',
    '06-05': 'Día Mundial del Medio Ambiente',
    '09-21': 'Día Internacional de la Paz',
    '12-25': 'Navidad'
};

// Agregar un evento de clic a cada elemento td
days.forEach(day => {
    day.addEventListener('click', () => {
        const date = new Date();
        const month = date.getMonth() + 1;
        const dayOfMonth = day.innerText.padStart(2, '0');
        const key = `${month}-${dayOfMonth}`;

        if (plants[key]) {
            alert(plants[key]);
        } else {
            alert('No hay información disponible para este día');
        }
    });
});
