// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Toggle Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isExpanded = faqItem.classList.contains('expanded');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('expanded');
                }
            });
            
            // Toggle current FAQ item
            faqItem.classList.toggle('expanded');
        });
    });
    
    // FAQ Toggle Button Functionality
    const faqToggleButtons = document.querySelectorAll('.faq-toggle');
    
    faqToggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the question click
            const faqItem = this.closest('.faq-item');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('expanded');
                }
            });
            
            // Toggle current FAQ item
            faqItem.classList.toggle('expanded');
        });
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Button click handlers
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .whatsapp-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle WhatsApp buttons
            if (this.classList.contains('whatsapp-btn') || 
                this.textContent.includes('WhatsApp') || 
                this.textContent.includes('Vender mi reloj') ||
                this.textContent.includes('Voy vendiendo')) {
                
                // Replace with actual WhatsApp number
                const whatsappNumber = '1234567890'; // Replace with real number
                const message = encodeURIComponent('Hola, me interesa vender mi reloj. ¿Podrían ayudarme con una cotización?');
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
                
                window.open(whatsappUrl, '_blank');
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target) => {
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    };

    // Observe stat numbers for counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                
                if (number && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    animateCounter(entry.target, number);
                }
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        if (stat.textContent.match(/\d/)) {
            statsObserver.observe(stat);
        }
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });

    // Form validation (if any forms are added later)
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff4444';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (isValid) {
                // Handle form submission
                console.log('Form is valid, ready to submit');
                // Add actual form submission logic here
            }
        });
    });

    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // Reviews slider functionality
    const reviewsTrack = document.getElementById('reviewsTrack');
    const reviewsNextBtn = document.getElementById('reviewsNextBtn');
    
    if (reviewsTrack && reviewsNextBtn) {
        const reviewItems = reviewsTrack.querySelectorAll('.review-item');
        let currentIndex = 0;
        let reviewsPerView = 3; // Default for desktop
        
        // Calculate reviews per view based on screen size
        function updateReviewsPerView() {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 480) {
                reviewsPerView = 1;
            } else if (screenWidth <= 1024) {
                reviewsPerView = 2;
            } else {
                reviewsPerView = 3;
            }
        }
        
        // Update slider position
        function updateSliderPosition() {
            const translateX = -(currentIndex * (100 / reviewsPerView));
            reviewsTrack.style.transform = `translateX(${translateX}%)`;
        }
        
        // Next button functionality
        function nextReviews() {
            const maxIndex = Math.max(0, reviewItems.length - reviewsPerView);
            currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
            updateSliderPosition();
        }
        
        // Initialize
        updateReviewsPerView();
        updateSliderPosition();
        
        // Event listeners
        reviewsNextBtn.addEventListener('click', nextReviews);
        
        // Handle window resize
        window.addEventListener('resize', debounce(() => {
            updateReviewsPerView();
            // Reset to first slide on resize to avoid layout issues
            currentIndex = 0;
            updateSliderPosition();
        }, 250));
        
        // Auto-advance reviews (optional)
        let autoAdvanceInterval;
        
        function startAutoAdvance() {
            autoAdvanceInterval = setInterval(nextReviews, 5000); // 5 seconds
        }
        
        function stopAutoAdvance() {
            if (autoAdvanceInterval) {
                clearInterval(autoAdvanceInterval);
            }
        }
        
        // Start auto-advance
        startAutoAdvance();
        
        // Pause auto-advance on hover
        const reviewsSection = document.querySelector('.reviews-section');
        if (reviewsSection) {
            reviewsSection.addEventListener('mouseenter', stopAutoAdvance);
            reviewsSection.addEventListener('mouseleave', startAutoAdvance);
        }
        
        // Pause auto-advance when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopAutoAdvance();
            } else {
                startAutoAdvance();
            }
        });
    }

    // Lazy loading for images
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

    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Utility functions
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Export functions for potential use in other scripts
window.RollieUtils = {
    debounce,
    throttle
};
