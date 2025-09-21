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
        benefits_title: "Beneficios Clave",
        for_businesses_btn: "Para negocios",
        for_companies_btn: "Para compañías",
        benefit_1_title: "Reducción de Pérdidas de Inventario",
        benefit_1_desc: "Prevenimos fallas térmicas y minimizamos el descarte de productos, aumentando tu rentabilidad.",
        benefit_2_title: "Optimización de Costos",
        benefit_2_desc: "Te ayudamos a pasar del mantenimiento reactivo a uno predictivo, reduciendo gastos de emergencia y consumo energético.",
        benefit_3_title: "Toma de Decisiones Informada",
        benefit_3_desc: "Accede a datos precisos y en tiempo real para optimizar tu operación y la gestión de tus activos.",
        benefit_4_title: "Aumento de la Eficiencia Operativa",
        benefit_4_desc: "Gestiona tus tareas de forma inteligente, atiende a más clientes en menos tiempo y genera reportes al instante.",
        benefit_5_title: "Mejora de la Fidelización",
        benefit_5_desc: "Fortalece la confianza con un servicio proactivo y transparente, mejorando la retención de clientes a largo plazo.",
        benefit_6_title: "Posicionamiento en el Mercado",
        benefit_6_desc: "Diferénciate de la competencia con una solución tecnológica que te permite captar nuevos clientes de forma más efectiva.",
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
        benefits_title: "Key Benefits",
        for_businesses_btn: "For Businesses",
        for_companies_btn: "For Companies",
        benefit_1_title: "Inventory Loss Reduction",
        benefit_1_desc: "We prevent thermal failures and minimize product discard, increasing your profitability.",
        benefit_2_title: "Cost Optimization",
        benefit_2_desc: "We help you shift from reactive to predictive maintenance, reducing emergency expenses and energy consumption.",
        benefit_3_title: "Informed Decision-Making",
        benefit_3_desc: "Access accurate, real-time data to optimize your operations and asset management.",
        benefit_4_title: "Increased Operational Efficiency",
        benefit_4_desc: "Manage your tasks smartly, serve more clients in less time, and generate reports instantly.",
        benefit_5_title: "Improved Customer Loyalty",
        benefit_5_desc: "Build trust with proactive and transparent service, improving long-term client retention.",
        benefit_6_title: "Market Positioning",
        benefit_6_desc: "Differentiate yourself from the competition with a tech solution that helps you acquire new clients more effectively.",
        all_rights_reserved: "All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const contactForm = document.getElementById('contact-form');
    const langEs = document.getElementById('lang-es');
    const langEn = document.getElementById('lang-en');
    const ctaButton = document.getElementById('cta-button');
    const benefitFilterBtns = document.querySelectorAll('.benefit-filter-btn');
    const benefitCards = document.querySelectorAll('.benefit-card');

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

    // Lógica del filtro de beneficios
    benefitFilterBtns.forEach(button => {
        button.addEventListener('click', () => {
            // Remover la clase activa de todos los botones y añadirla al que se hizo clic
            benefitFilterBtns.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Obtener el grupo objetivo del atributo de datos
            const targetGroup = button.dataset.target;

            // Mostrar/ocultar las tarjetas según el grupo objetivo
            benefitCards.forEach(card => {
                if (card.dataset.userGroup === targetGroup) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});
