// ===== MULTILINGUAL CONTENT =====
const translations = {
    pt: {
        // Navigation
        'name': 'Rafael Silva',
        'nav-about': 'Sobre',
        'nav-projects': 'Projetos',
        'nav-skills': 'Habilidades',
        'nav-certifications': 'Certificações',
        'nav-contact': 'Contato',
        
        // Hero Section
        'hero-greeting': 'Olá, eu sou',
        'hero-subtitle': 'Desenvolvedor fullstack especializado em criar soluções web modernas e eficientes',
        'download-cv': 'Baixar Currículo (PT)',
        'contact-btn': 'Entre em Contato',
        
        // About Section
        'about-title': 'Sobre Mim',
        'about-subtitle': 'Conheça mais sobre minha trajetória e experiência',
        'about-text1': 'Sou um desenvolvedor fullstack apaixonado por criar soluções web modernas e eficientes. Com experiência sólida em tecnologias front-end e back-end, dedico-me a desenvolver aplicações que combinam funcionalidade excepcional com experiência do usuário intuitiva.',
        'about-text2': 'Minha abordagem é focada em código limpo, boas práticas de desenvolvimento e constante aprendizado. Estou sempre em busca de novos desafios que me permitam crescer profissionalmente e contribuir para projetos inovadores.',
        'years-experience': 'Anos de Experiência',
        'projects-completed': 'Projetos Concluídos',
        'technologies': 'Tecnologias',
        
        // Projects Section
        'projects-title': 'Projetos',
        'projects-subtitle': 'Alguns dos meus trabalhos mais recentes',
        'project1-title': 'Sistema para Petshop',
        'project1-desc': 'Plataforma para administração de almoxarifado de petshop',
        'project2-title': 'Site Erlene Advogados',
        'project2-desc': 'Website com blog e totalmente personalizado para escritórios juridicos',
        'project3-title': 'Loja virtual vancouver tec',
        'project3-desc': 'Uma loja virtual com vendas de sistemas, sites, aplicativos e scripts para seu projeto',
        'view-project': 'Ver Projeto',
        'view-code': 'Código',
        
        // Skills Section
        'skills-title': 'Habilidades',
        'skills-subtitle': 'Tecnologias e ferramentas que domino',
        'frontend-title': 'Frontend',
        'backend-title': 'Backend',
        'database-title': 'Banco de Dados',
        
        // Certifications Section
        'certifications-title': 'Certificações',
        'certifications-subtitle': 'Credenciais e cursos que validam minha expertise técnica',
        'view-certificate': 'Ver Certificado',
        'cert-date-2024': '2024',
        'cert-date-2023': '2023',
        'cert-date-2022': '2022',
        
        // AWS Certifications
        'aws-cloud-practitioner': 'AWS Cloud Practitioner',
        'aws-solutions-architect': 'AWS Solutions Architect Associate',
        
        // Microsoft Certifications
        'azure-fundamentals': 'Azure Fundamentals (AZ-900)',
        'power-platform': 'Microsoft Power Platform Fundamentals',
        
        // IBM Certifications
        'ibm-data-science': 'IBM Data Science Professional Certificate',
        'ibm-cloud': 'IBM Cloud Essentials',
        
        // SENAI Certifications
        'senai-web-dev': 'Desenvolvimento Web Full Stack',
        'senai-mobile': 'Desenvolvimento Mobile',
        
        // Contact Section
        'contact-title': 'Contato',
        'contact-subtitle': 'Vamos conversar sobre oportunidades',
        'contact-info-title': 'Informações de Contato',
        'form-name': 'Seu nome',
        'form-email': 'Seu email',
        'form-message': 'Sua mensagem',
        'send-message': 'Enviar Mensagem',
        
        // Footer
        'footer-rights': 'Todos os direitos reservados.'
    },
    en: {
        // Navigation
        'name': 'Rafael Silva',
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-certifications': 'Certifications',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-greeting': 'Hello, I am',
        'hero-subtitle': 'Fullstack Developer specialized in creating modern and efficient web solutions',
        'download-cv': 'Download Resume (EN)',
        'contact-btn': 'Get in Touch',
        
        // About Section
        'about-title': 'About Me',
        'about-subtitle': 'Learn more about my journey and experience',
        'about-text1': 'I am a passionate fullstack developer focused on creating modern and efficient web solutions. With solid experience in front-end and back-end technologies, I am dedicated to developing applications that combine exceptional functionality with intuitive user experience.',
        'about-text2': 'My approach is focused on clean code, development best practices, and continuous learning. I am always looking for new challenges that allow me to grow professionally and contribute to innovative projects.',
        'years-experience': 'Years of Experience',
        'projects-completed': 'Projects Completed',
        'technologies': 'Technologies',
        
        // Projects Section
        'projects-title': 'Projects',
        'projects-subtitle': 'Some of my most recent work',
        'project1-title': 'E-commerce Platform',
        'project1-desc': 'Complete e-commerce platform with admin panel, payment system and product management.',
        'project2-title': 'Task Management App',
        'project2-desc': 'Task management application with collaborative features and real-time notifications.',
        'project3-title': 'REST API',
        'project3-desc': 'An online store selling systems, websites, applications and scripts for your project',
        'view-project': 'View Project',
        'view-code': 'Code',
        
        // Skills Section
        'skills-title': 'Skills',
        'skills-subtitle': 'Technologies and tools I master',
        'frontend-title': 'Frontend',
        'backend-title': 'Backend',
        'database-title': 'Database',
        
        // Certifications Section
        'certifications-title': 'Certifications',
        'certifications-subtitle': 'Credentials and courses that validate my technical expertise',
        'view-certificate': 'View Certificate',
        'cert-date-2024': '2024',
        'cert-date-2023': '2023',
        'cert-date-2022': '2022',
        
        // AWS Certifications
        'aws-cloud-practitioner': 'AWS Cloud Practitioner',
        'aws-solutions-architect': 'AWS Solutions Architect Associate',
        
        // Microsoft Certifications
        'azure-fundamentals': 'Azure Fundamentals (AZ-900)',
        'power-platform': 'Microsoft Power Platform Fundamentals',
        
        // IBM Certifications
        'ibm-data-science': 'IBM Data Science Professional Certificate',
        'ibm-cloud': 'IBM Cloud Essentials',
        
        // SENAI Certifications
        'senai-web-dev': 'Full Stack Web Development',
        'senai-mobile': 'Mobile Development',
        
        // Contact Section
        'contact-title': 'Contact',
        'contact-subtitle': 'Let\'s talk about opportunities',
        'contact-info-title': 'Contact Information',
        'form-name': 'Your name',
        'form-email': 'Your email',
        'form-message': 'Your message',
        'send-message': 'Send Message',
        
        // Footer
        'footer-rights': 'All rights reserved.'
    }
};

// ===== DOM ELEMENTS =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const langButtons = document.querySelectorAll('.lang-btn');
const skillBars = document.querySelectorAll('.skill-progress');
const sections = document.querySelectorAll('section');
const header = document.querySelector('.header');
const heroDownloadBtn = document.querySelector('.hero-buttons .btn-primary');
const contactForm = document.querySelector('.form');

// ===== STATE MANAGEMENT =====
let currentLanguage = 'pt';
let isMenuOpen = false;
let lastScrollY = window.scrollY;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    updateLanguage(currentLanguage);
    animateSkillBars();
    handleScrollAnimations();
    updateHeaderOnScroll();
    
    // Add initial animation to hero section
    setTimeout(() => {
        document.querySelector('.hero').classList.add('animate-fade-in');
    }, 100);
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Mobile menu toggle
    mobileMenuToggle?.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Language switcher
    langButtons.forEach(btn => {
        btn.addEventListener('click', handleLanguageSwitch);
    });
    
    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
    
    // Contact form submission
    contactForm?.addEventListener('submit', handleFormSubmission);
    
    // Scroll events
    window.addEventListener('scroll', debounce(handleScroll, 10));
    window.addEventListener('resize', debounce(handleResize, 250));
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', handleOutsideClick);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

// ===== MOBILE MENU FUNCTIONALITY =====
function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    navMenu?.classList.toggle('active', isMenuOpen);
    mobileMenuToggle?.classList.toggle('active', isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    
    // Animate hamburger menu
    animateHamburgerMenu(isMenuOpen);
}

function closeMobileMenu() {
    if (isMenuOpen) {
        isMenuOpen = false;
        navMenu?.classList.remove('active');
        mobileMenuToggle?.classList.remove('active');
        document.body.style.overflow = '';
        animateHamburgerMenu(false);
    }
}

function animateHamburgerMenu(isOpen) {
    const spans = mobileMenuToggle?.querySelectorAll('span');
    if (!spans) return;
    
    spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = isOpen ? '0' : '1';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(7px, -6px)' : '';
}

// ===== LANGUAGE SWITCHING =====
function handleLanguageSwitch(e) {
    const newLang = e.target.dataset.lang;
    if (newLang && newLang !== currentLanguage) {
        updateLanguage(newLang);
    }
}

function updateLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    
    // Update page title
    document.title = lang === 'pt' 
        ? 'Rafael Silva | Desenvolvedor Fullstack | Portfólio Profissional'
        : 'Rafael Silva | Fullstack Developer | Professional Portfolio';
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = lang === 'pt'
            ? 'Desenvolvedor Fullstack com foco em soluções modernas para web. Veja projetos, habilidades e experiência.'
            : 'Fullstack Developer specializing in modern web solutions. Projects, skills and professional background.';
    }
    
    // Update content
    updateContent(lang);
    
    // Update download button href
    updateDownloadButton(lang);
    
    // Update form placeholders
    updateFormPlaceholders(lang);
}

function updateContent(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-key]');
    
    elementsToTranslate.forEach(element => {
        const key = element.dataset.key;
        const translation = translations[lang][key];
        
        if (translation) {
            element.textContent = translation;
        }
    });
}

function updateDownloadButton(lang) {
    if (heroDownloadBtn) {
        const href = lang === 'pt' 
            ? './assets/pdf/Rafael-Silva-CV-PT.pdf'
            : './assets/pdf/Rafael-Silva-CV-EN.pdf';
        heroDownloadBtn.href = href;
    }
}

function updateFormPlaceholders(lang) {
    const placeholderElements = document.querySelectorAll('[data-placeholder-key]');
    
    placeholderElements.forEach(element => {
        const key = element.dataset.placeholderKey;
        const translation = translations[lang][key];
        
        if (translation) {
            element.placeholder = translation;
        }
    });
}

// ===== SMOOTH SCROLLING =====
function handleSmoothScroll(e) {
    e.preventDefault();
    
    const targetId = e.target.getAttribute('href');
    if (targetId?.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = header?.offsetHeight || 0;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active nav link
            updateActiveNavLink(targetId);
        }
    }
    
    closeMobileMenu();
}

function updateActiveNavLink(targetId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// ===== SCROLL ANIMATIONS =====
function handleScroll() {
    updateHeaderOnScroll();
    handleScrollAnimations();
    updateActiveNavOnScroll();
}

function updateHeaderOnScroll() {
    const currentScrollY = window.scrollY;
    
    if (header) {
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    }
    
    lastScrollY = currentScrollY;
}

function handleScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars when skills section is visible
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(section => {
        section.classList.add('section');
        observer.observe(section);
    });
}

function updateActiveNavOnScroll() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== SKILL BARS ANIMATION =====
function animateSkillBars() {
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }, index * 100);
    });
}

// ===== FORM HANDLING =====
function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = currentLanguage === 'pt' ? 'Enviando...' : 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        showNotification(
            currentLanguage === 'pt' 
                ? 'Mensagem enviada com sucesso!'
                : 'Message sent successfully!',
            'success'
        );
        
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleResize() {
    // Close mobile menu on desktop
    if (window.innerWidth >= 768 && isMenuOpen) {
        closeMobileMenu();
    }
}

function handleOutsideClick(e) {
    if (isMenuOpen && !navMenu?.contains(e.target) && !mobileMenuToggle?.contains(e.target)) {
        closeMobileMenu();
    }
}

function handleKeyboardNavigation(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && isMenuOpen) {
        closeMobileMenu();
    }
    
    // Navigate with arrow keys when focus is on nav
    if (e.target.classList.contains('nav-link')) {
        const currentIndex = Array.from(navLinks).indexOf(e.target);
        let nextIndex;
        
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            nextIndex = (currentIndex + 1) % navLinks.length;
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            nextIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
        }
        
        if (nextIndex !== undefined) {
            navLinks[nextIndex].focus();
        }
    }
}

// ===== THEME DETECTION =====
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // User prefers dark mode - could implement dark theme here
        console.log('Dark mode preferred');
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== ANALYTICS & TRACKING =====
function trackEvent(eventName, eventData = {}) {
    // Implementation for analytics tracking
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Track important interactions
function setupAnalytics() {
    // Track CV downloads
    document.querySelectorAll('a[download]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('cv_download', {
                language: currentLanguage,
                file_name: link.href.split('/').pop()
            });
        });
    });
    
    // Track project link clicks
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('project_click', {
                project_name: link.closest('.project-card').querySelector('.project-title').textContent,
                link_type: link.textContent.toLowerCase()
            });
        });
    });
    
    // Track social media clicks
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', () => {
            const platform = link.href.includes('github') ? 'github' : 'linkedin';
            trackEvent('social_click', { platform });
        });
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Could send to error tracking service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send to error tracking service
});

// ===== INITIALIZATION COMPLETION =====
document.addEventListener('DOMContentLoaded', () => {
    setupAnalytics();
    lazyLoadImages();
    detectSystemTheme();
    
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
    
    console.log('Portfolio website initialized successfully');
});