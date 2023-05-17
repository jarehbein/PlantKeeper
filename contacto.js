const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

  // Aquí se puede enviar el formulario a un servidor o hacer cualquier otra acción necesaria con los datos del formulario

  alert(`Gracias ${name} por contactarnos. Te responderemos lo antes posible.`);
  
  form.reset();
});
