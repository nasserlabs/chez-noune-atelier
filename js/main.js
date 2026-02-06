// ==================== NAVIGATION MOBILE ====================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Ajouter une ombre au scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 30px rgba(212, 97, 107, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 30px rgba(212, 97, 107, 0.08)';
    }

    lastScroll = currentScroll;
});

// ==================== FORMULAIRE DE CONTACT ====================
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm && successMessage) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulation d'envoi du formulaire
        const submitButton = contactForm.querySelector('.submit-button');
        const originalHTML = submitButton.innerHTML;
        
        // Animation du bouton
        submitButton.innerHTML = '<span class="button-text">Envoi en cours...</span>';
        submitButton.disabled = true;
        
        // Simuler un délai d'envoi
        setTimeout(() => {
            // Masquer le formulaire et afficher le message de succès
            contactForm.style.display = 'none';
            successMessage.classList.add('show');
            
            // Réinitialiser après 5 secondes
            setTimeout(() => {
                contactForm.style.display = 'block';
                successMessage.classList.remove('show');
                contactForm.reset();
                submitButton.innerHTML = originalHTML;
                submitButton.disabled = false;
            }, 5000);
        }, 1500);
    });
}

// ==================== FORMULAIRE NEWSLETTER ====================
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const button = newsletterForm.querySelector('button');
        const input = newsletterForm.querySelector('input');
        const originalText = button.textContent;
        
        // Animation du bouton
        button.textContent = 'Inscription réussie ! ✨';
        button.style.background = 'linear-gradient(135deg, #B8D4C7, #9BC4B4)';
        
        // Réinitialiser après 3 secondes
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            input.value = '';
        }, 3000);
    });
}

// ==================== ANIMATIONS AU SCROLL ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observer les cartes produits
document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});

// Observer les sections
document.querySelectorAll('.about-preview, .process-section, .cta-section').forEach(section => {
    observer.observe(section);
});

// ==================== SMOOTH SCROLL POUR LES ANCRES ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ne pas intercepter les liens vides (#)
        if (href === '#' || href === '#!') {
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== ACTIVE LINK HIGHLIGHTING ====================
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === '/' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Appeler au chargement de la page
window.addEventListener('DOMContentLoaded', setActiveLink);

// ==================== LAZY LOADING DES IMAGES ====================
if ('loading' in HTMLImageElement.prototype) {
    // Le navigateur supporte le lazy loading natif
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback pour les navigateurs plus anciens
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==================== EASTER EGG - ANIMATION LOGO ====================
const logo = document.querySelector('.logo');
let clickCount = 0;

if (logo) {
    logo.addEventListener('click', (e) => {
        clickCount++;
        
        if (clickCount === 5) {
            // Animation spéciale après 5 clics
            logo.style.animation = 'float 2s ease-in-out infinite';
            
            setTimeout(() => {
                logo.style.animation = '';
                clickCount = 0;
            }, 10000);
        }
    });
}

// ==================== PERFORMANCE - DEBOUNCE SCROLL ====================
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

// Optimiser le scroll listener
const optimizedScroll = debounce(() => {
    // Code de scroll optimisé si nécessaire
}, 100);

window.addEventListener('scroll', optimizedScroll);

// ==================== ACCESSIBILITÉ - FOCUS TRAP DANS MENU MOBILE ====================
if (mobileMenuToggle) {
    navLinks.addEventListener('keydown', (e) => {
        if (!navLinks.classList.contains('active')) return;
        
        const focusableElements = navLinks.querySelectorAll('a');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
        
        if (e.key === 'Escape') {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            mobileMenuToggle.focus();
        }
    });
}

// ==================== CONSOLE MESSAGE ====================
console.log('%c✨ Bienvenue Chez Noune! ✨', 'color: #D4616B; font-size: 24px; font-weight: bold;');
console.log('%cSite créé avec amour 💝', 'color: #FF8FA3; font-size: 14px;');
