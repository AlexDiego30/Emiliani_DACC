// Activar el carrusel de Bootstrap con un intervalo personalizado
const carouselElement = document.querySelector('#carouselExampleIndicators');

const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000, // Cambia de imagen cada 3 segundos
    ride: 'carousel'
});

// Mostrar un mensaje de alerta al hacer clic en un enlace de contacto
const contactLink = document.querySelector('.nav-link[href="#contact"]');
if (contactLink) {
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('¡Gracias por querer contactarnos! Pronto te responderemos.');
    });
}

// Scroll suave al hacer clic en los enlaces de la navegación
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        // Si el scroll es mayor a 50px (puedes ajustar según tus necesidades)
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
