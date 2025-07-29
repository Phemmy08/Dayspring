// DOM Elements
const header = document.querySelector('header');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const backToTopBtn = document.getElementById('backToTop');

// Countdown Timer
function updateCountdown() {
    const currentYear = new Date().getFullYear();
    let eventDate = new Date(`November 4, ${currentYear} 17:00:00`).getTime();
    const now = new Date().getTime();
    
    // If this year's date has passed, use next year's date
    if (now > eventDate) {
        eventDate = new Date(`November 4, ${currentYear + 1} 18:00:00`).getTime();
    }
    
    const timeLeft = eventDate - now;

    // Calculate time units
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update DOM elements with padded numbers
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Enhanced Intersection Observer for animations
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animations to child elements
            const children = entry.target.querySelectorAll('.fade-in-delay-1, .fade-in-delay-2, .fade-in-delay-3');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('visible');
                }, 200 * (index + 1));
            });
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px'
});

// Observe all animated elements
document.querySelectorAll('.section-header, .fade-up, .speaker-card, .schedule-day, .testimonial-card').forEach(el => {
    animationObserver.observe(el);
});

// Parallax effect for hero section
const heroContent = document.querySelector('.hero-content');
const parallaxBg = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    if (parallaxBg) {
        const scrolled = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    if (heroContent) {
        const scrolled = window.pageYOffset;
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled * 0.003);
    }
});

// Smooth scroll with offset for header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// Enhanced mobile menu toggle with animation
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const navToggle = document.getElementById('navToggle');
    
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Animate menu items
    const menuItems = navLinks.querySelectorAll('a');
    menuItems.forEach((item, index) => {
        if (navLinks.classList.contains('active')) {
            item.style.animation = `slideFromRight 0.3s ease forwards ${index * 0.1}s`;
        } else {
            item.style.animation = '';
        }
    });
}

// Add click event listener to nav toggle
document.getElementById('navToggle').addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.getElementById('navLinks');
    const navToggle = document.getElementById('navToggle');
    
    if (!e.target.closest('.nav-links') && !e.target.closest('.nav-toggle') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Form submission animation
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Let the form submit normally (don't prevent default)
        // The _next hidden input will redirect to your thank you page
    });
}
// Add active class to current section in navigation
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scroll = window.pageYOffset;
        
        if (scroll >= sectionTop && scroll < sectionTop + sectionHeight) {
            const targetLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            navLinks.forEach(link => link.classList.remove('active'));
            if (targetLink) targetLink.classList.add('active');
        }
    });
}

// Update active section on scroll
window.addEventListener('scroll', () => {
    updateActiveSection();
});

// Initialize active section on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveSection();
});

// Register button animation
const registerBtns = document.querySelectorAll('.register-btn');
registerBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Add CSS classes for mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--background-light);
            padding: 1rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .nav-links.active li {
            margin: 0.5rem 0;
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(style);
}); 