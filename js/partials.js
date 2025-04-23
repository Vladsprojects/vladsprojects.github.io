const btnToggleResponsive = document.querySelector('.btn-toggle'); 
const menuResponsive = document.querySelector('.menu-responsive');
const header = document.querySelector('header');

btnToggleResponsive.addEventListener('click', () => {
    const iconBars = document.querySelector('.fa-bars');
    const iconClose = document.querySelector('.fa-xmark');
    console.log("Furula")

    if (iconBars.classList.contains('active')) {
        iconBars.classList.remove('active');
        iconClose.classList.add('active');
        menuResponsive.classList.add('show');
        menuResponsive.style.top = `${header.clientHeight}px`;
        console.log("Funciona")
    } else {
        iconBars.classList.add('active');
        iconClose.classList.remove('active');
        menuResponsive.classList.remove('show');
    }
});


// Experiencia laboral

  const buttons = document.querySelectorAll('.accordion-button');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.getAttribute('data-target'));
      const isOpen = target.classList.contains('show');

      // Cerrar todos
      document.querySelectorAll('.accordion-collapse').forEach(c => {
        c.classList.remove('show');
        c.previousElementSibling.querySelector('.accordion-button').setAttribute('aria-expanded', 'false');
      });

      // Si no estaba abierta, abrirla
      if (!isOpen) {
        target.classList.add('show');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
