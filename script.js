<<<<<<< HEAD
// Theme and Language Controller

document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Controller ---
=======
document.addEventListener('DOMContentLoaded', () => {
    // --- Modo Claro / Oscuro ---
>>>>>>> 3a69ec8b48af297620bdb9545e9d3d8d573c49b2
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');

<<<<<<< HEAD
    // Check system preference or saved theme
=======
>>>>>>> 3a69ec8b48af297620bdb9545e9d3d8d573c49b2
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        if (isDark) {
            localStorage.setItem('theme', 'dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            localStorage.setItem('theme', 'light');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    });

<<<<<<< HEAD
    // --- Language Controller ---
=======
    // --- Control de Idioma (ES / EN) ---
>>>>>>> 3a69ec8b48af297620bdb9545e9d3d8d573c49b2
    const langToggleBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    let currentLang = localStorage.getItem('lang') || 'es';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        langText.textContent = lang === 'es' ? 'EN' : 'ES';

        const elements = document.querySelectorAll('[data-es][data-en]');
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
    }

<<<<<<< HEAD
    // Initialize Language
=======
>>>>>>> 3a69ec8b48af297620bdb9545e9d3d8d573c49b2
    setLanguage(currentLang);

    langToggleBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(nextLang);
    });

<<<<<<< HEAD
    // --- Mobile Menu Toggle ---
=======
    // --- Menú Celular / Responsivo ---
>>>>>>> 3a69ec8b48af297620bdb9545e9d3d8d573c49b2
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

<<<<<<< HEAD
    // --- Contact Form Submission Handler ---
=======
    // --- Formulario de Contacto ---
>>>>>>> 3a69ec8b48af297620bdb9545e9d3d8d573c49b2
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = currentLang === 'es' 
                ? '¡Gracias por contactarme! Te responderé pronto.' 
                : 'Thank you for reaching out! I will get back to you soon.';
            alert(msg);
            contactForm.reset();
        });
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> 3a69ec8b48af297620bdb9545e9d3d8d573c49b2
