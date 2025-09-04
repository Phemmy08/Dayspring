// Scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all scroll reveal elements
        const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
        scrollRevealElements.forEach(el => observer.observe(el));

        // Scroll progress indicator
        const scrollProgress = document.querySelector('.scroll-progress');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = scrollTop / (docHeight - winHeight);
            const scrollPercentRounded = Math.round(scrollPercent * 100);
            
            scrollProgress.style.width = scrollPercentRounded + '%';
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add floating animation to service blocks
        const serviceBlocks = document.querySelectorAll('.service-block');
        serviceBlocks.forEach((block, index) => {
            block.style.animationDelay = `${index * 0.2}s`;
            block.addEventListener('mouseenter', () => {
                block.style.transform = 'translateX(10px) scale(1.02)';
            });
            block.addEventListener('mouseleave', () => {
                block.style.transform = 'translateX(0) scale(1)';
            });
        });

        // Add parallax effect to header
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('#services');
            if (header) {
                header.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Add typing effect to main heading
        const mainHeading = document.querySelector('#services h2');
        if (mainHeading) {
            const text = mainHeading.textContent;
            mainHeading.textContent = '';
            let i = 0;
            
            setTimeout(() => {
                const typeInterval = setInterval(() => {
                    if (i < text.length) {
                        mainHeading.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(typeInterval);
                    }
                }, 100);
            }, 500);
        }

        // Add pulse effect to event cards on hover
        const eventCards = document.querySelectorAll('.event-card');
        eventCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                card.style.opacity = '1';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                card.style.opacity = '1';
            });
        });

        // Add CSS for pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });