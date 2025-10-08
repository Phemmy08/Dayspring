// Smooth Scroll Animation on Load
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Background Image Slideshow - Add your church images here
const heroBackgrounds = [
    'url("../assets/partnerbg1.jpg")',
    'url("../assets/partnerbg2.jpg")',
    'url("../assets/partnerbg3.jpg")',
    'url("../assets/partnerbg4.jpg")',
    // Add more image paths as needed
    // If images don't exist yet, it will fall back to gradient
];

let currentBgIndex = 0;
const bgSlide = document.querySelector('.partner-background-slide');

function changeBackground() {
    currentBgIndex = (currentBgIndex + 1) % heroBackgrounds.length;
    
    // Fade out
    bgSlide.style.opacity = '0';
    
    setTimeout(() => {
        bgSlide.style.background = heroBackgrounds[currentBgIndex];
        bgSlide.style.backgroundSize = 'cover';
        bgSlide.style.backgroundPosition = 'center';
        
        // Fade in
        bgSlide.style.opacity = '1';
    }, 1000);
}

// Smooth transition
bgSlide.style.transition = 'opacity 1s ease-in-out';

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all giving sections
document.querySelectorAll('.partner-giving-section, .partner-welcome-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

// Button Click Handlers
const localCardBtn = document.getElementById('localCardBtn');
const localTransferBtn = document.getElementById('localTransferBtn');
const intlCardBtn = document.getElementById('intlCardBtn');
const intlTransferBtn = document.getElementById('intlTransferBtn');

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect');

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .partner-btn {
        position: relative;
        overflow: hidden;
    }
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Local Card Payment
/* localCardBtn.addEventListener('click', function(e) {
    createRipple(e);
    setTimeout(() => {
        alert('Redirecting to Local Card Payment Gateway...\n\nPlease update this with your payment URL.');
        // window.location.href = 'your-local-card-payment-url';
    }, 300);
}); */

// Local Transfer Details
/* localTransferBtn.addEventListener('click', function(e) {
    createRipple(e);
    setTimeout(() => {
        showTransferModal('local');
    }, 300);
}); */

// International Card Payment
/* intlCardBtn.addEventListener('click', function(e) {
    createRipple(e);
    setTimeout(() => {
        alert('Redirecting to International Card Payment Gateway...\n\nPlease update this with your payment URL.');
        // window.location.href = 'your-international-card-payment-url';
    }, 300);
}); */

// International Transfer Details
/* intlTransferBtn.addEventListener('click', function(e) {
    createRipple(e);
    setTimeout(() => {
        showTransferModal('international');
    }, 300);
}); */

// Transfer Details Modal Function
/* function showTransferModal(type) {
    const modalContent = type === 'local' 
        ? `
            <h3>Local Bank Transfer Details</h3>
            <p><strong>Bank Name:</strong> UBA</p>
            <p><strong>Account Name:</strong> Dayspring Seraphic Church</p>
            <p><strong>Account Number:</strong> 1122334455667</p>
            <p><strong>Reference:</strong> Partnership/Tithe/Offering</p>
        `
        : `
            <h3>International Transfer Details</h3>
            <p><strong>Bank Name:</strong> [Your Bank Name]</p>
            <p><strong>Account Name:</strong> [Church Account Name]</p>
            <p><strong>IBAN:</strong> [IBAN Number]</p>
            <p><strong>SWIFT Code:</strong> [SWIFT Code]</p>
            <p><strong>Reference:</strong> Partnership/Tithe/Offering</p>
        `;
    
    alert(`${type.toUpperCase()} TRANSFER DETAILS\n\nPlease update the JavaScript file with your actual bank details.\n\nYou can also create a modal popup for a better user experience.`); */
    
    // You can create a beautiful modal instead of alert
    // Example: showModal(modalContent);
/* } */

// Parallax Effect on Scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.partner-hero-content');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// Add hover sound effect (optional)
document.querySelectorAll('.partner-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        // You can add a subtle sound effect here if needed
        this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
});

// Animate numbers or counters (optional feature)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Console message for developers
console.log('%c👋 Welcome Church Developer! ', 'color: #CC5500; font-size: 20px; font-weight: bold;');
console.log('%cRemember to update payment URLs and bank details in the JavaScript file.', 'color: #666; font-size: 14px;');

// Prevent right-click on images (optional security)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
});