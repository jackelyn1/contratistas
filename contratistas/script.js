function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// Cerrar menú al redimensionar ventana
window.addEventListener('resize', () => {
  if (window.innerWidth > 480) {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  }
});

// 🎯 ANIMACIONES SIMPLIFICADAS
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function initScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll(`
    .services-section h2, 
    .services-section p, 
    .service-box,
    .portfolio-section h2,
    .portfolio-section p,
    .portfolio-item,
    .contact-section h2,
    .contact-section p,
    .contact-info,
    .contact-form,
    .map-container
  `);

  elementsToAnimate.forEach(element => observer.observe(element));
}

// Inicializar solo una vez
document.addEventListener('DOMContentLoaded', initScrollAnimations);




