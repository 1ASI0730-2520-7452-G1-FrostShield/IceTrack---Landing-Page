const translations = {
    es: {
        app_name: "IceTrack",
        home: "Inicio",
        benefits: "Beneficios",
        about_us: "Sobre Nosotros",
        testimonials: "Testimonios",
        contact_us: "Contáctanos",
        register: "Regístrate Ahora",
        hero_title: "Tu Solución para la Gestión Proactiva de Refrigeración",
        hero_subtitle: "Conecta a tu negocio con expertos para monitorear equipos en tiempo real, prevenir fallos y asegurar la calidad de tu inventario.",
        all_rights_reserved: "Todos los derechos reservados."
    },
    en: {
        app_name: "IceTrack",
        home: "Home",
        benefits: "Benefits",
        about_us: "About Us",
        testimonials: "Testimonials",
        contact_us: "Contact Us",
        register: "Register Now",
        hero_title: "Your Solution for Proactive Refrigeration Management",
        hero_subtitle: "Connect your business with experts to monitor equipment in real-time, prevent failures, and ensure the quality of your inventory.",
        all_rights_reserved: "All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const langEs = document.getElementById('lang-es');
    const langEn = document.getElementById('lang-en');
    const ctaButton = document.getElementById('cta-button');

    // Función para aplicar las traducciones según el idioma actual
    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });
        document.documentElement.lang = lang;
        langEs.classList.toggle('active', lang === 'es');
        langEn.classList.toggle('active', lang === 'en');
    }

    // Inicializar con español como idioma por defecto
    setLanguage('es');

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

    // Funcionalidad de cambio de idioma
    langEs.addEventListener('click', () => setLanguage('es'));
    langEn.addEventListener('click', () => setLanguage('en'));

    // Lógica del botón de llamada a la acción (CTA)
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Redireccionando a la página de registro de la aplicación...');
        // window.location.href = "https://your-app-url.com/register";
    });
});
