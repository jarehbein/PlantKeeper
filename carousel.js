const imagenes = document.querySelectorAll('.carousel-item');
const botonAnterior = document.querySelector('#carousel-anterior');
const botonSiguiente = document.querySelector('#carousel-siguiente');

let imagenActiva = 0;

botonAnterior.addEventListener('click', () => {
  imagenes[imagenActiva].classList.remove('activa');
  imagenActiva = (imagenActiva - 1 + imagenes.length) % imagenes.length;
  imagenes[imagenActiva].classList.add('activa');
});

botonSiguiente.addEventListener('click', () => {
  imagenes[imagenActiva].classList.remove('activa');
  imagenActiva = (imagenActiva + 1) % imagenes.length;
  imagenes[imagenActiva].classList.add('activa');
});
