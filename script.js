document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const langEs = document.getElementById('lang-es');
    const langEn = document.getElementById('lang-en');
    const ctaButton = document.getElementById('cta-button');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Lógica del botón de llamada a la acción (CTA)
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Redireccionando a la página de registro de la aplicación...');
        // window.location.href = "https://your-app-url.com/register";
    });
});
