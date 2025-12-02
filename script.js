// Translations Object - Based on provided CSV and HTML structure
const translations = {
    es: {
        // Hero
        hero_title: 'Vende y compra tu<br><span class="highlight-text">Reloj de lujo</span><br>de forma <span class="highlight-text">segura</span>',
        hero_subtitle: 'Ofertas rápidas, precios reales de mercado y autenticación garantizada.',
        hero_btn_sell: 'VENDE TU RELOJ',
        hero_btn_buy: 'COMPRAR TU RELOJ',
        hero_tag_payment: 'Pago inmediato',
        hero_tag_shipping: 'Envío asegurado',
        hero_tag_verify: 'Verificación profesional',
        hero_tag_quotes: '+1.200 Cotizaciones',
        
        // About
        about_title: 'SOBRE ROLLIE',
        about_desc: 'Rollie es una comunidad de relojes creada para coleccionistas modernos que valoran el descubrimiento, la claridad y entender realmente qué está pasando en el mercado. En un mundo donde los precios pueden sentirse confusos y la información viaja rápido —pero no siempre con precisión— Rollie aporta honestidad, perspectiva y una visión fundamentada. Ofrecemos un espacio donde coleccionar con criterio se siente natural, no abrumador, y donde el conocimiento real importa más que el ruido. Construida sobre la curiosidad compartida y un amor genuino por la relojería, Rollie ayuda a los coleccionistas a moverse con confianza y mantenerse conectados con lo que verdaderamente importa.',
        
        // Team
        team_title: 'EL EQUIPO',
        team_role_co: 'CO-FOUNDER',
        team_role_partner: 'PARTNER',
        team_desc_andres: 'Producto & Tecnología. Líder de producto con experiencia en plataformas de datos; responsable de la tecnología, pricing en tiempo real e integraciones WhatsApp/CRM.',
        team_desc_jd: 'Estrategia & Mercado. Experto en el mercado secundario de relojes de lujo, encargado de la red de socios, autenticación y valoración de piezas exclusivas.',
        team_desc_ivan: 'Líder de Ingeniería e Ingeniero de Software con más de 13 años de experiencia en desarrollo móvil y visión emprendedora. Experto en el uso de la IA (LLMs) para diseñar soluciones innovadoras que impulsan la productividad empresarial.',
        team_desc_jm: 'Crecimiento & Alianzas. Enfocado en la expansión de la comunidad Rollie y el desarrollo de relaciones estratégicas con coleccionistas clave en la región.',

        // How it works
        how_title: 'COMO<br>FUNCIONA',
        how_step1: 'Escríbenos<br>por WhatsApp',
        how_step2: 'Envía fotos<br>y referencia',
        how_step3: 'Recibe una<br>oferta firme',
        how_step4: 'Envío asegurado<br>y pago',

        // Benefits
        ben_title1: 'Precio de mercado real',
        ben_desc1: 'Transacciones, no listados inflados',
        ben_title2: 'Rápido y simple',
        ben_desc2: 'Promedio 12–36 h, todo por WhatsApp',
        ben_title3: 'Seguro',
        ben_desc3: 'Envío asegurado, antifraude, verificación profesional',
        ben_title4: 'Transparente',
        ben_desc4: 'Ofertas válidas 48 h, sin letras pequeñas',

        // Reviews
        rev_text1: '"Vendí mi Submariner en 24 horas. Todo por WhatsApp y el envío llegó asegurado."',
        rev_auth1: 'Andrés Suárez - CDMX',
        rev_text2: '"Me ofrecieron un precio justo basado en mercado real, no en listados inflados."',
        rev_auth2: 'Juan - Bogotá',
        rev_text3: '"Proceso súper fácil: fotos, oferta, guía de envío y pago el mismo día."',
        rev_auth3: 'Sofía - Lima',
        rev_text4: '"Excelente servicio, muy profesional y rápido. Recomiendo totalmente."',
        rev_auth4: 'Carlos - Buenos Aires',

        // FAQ
        faq_title: 'PREGUNTAS FRECUENTES',
        faq_q1: '¿Cuál es su política de envío?',
        faq_a1: 'Ofrecemos envío mundial gratuito en todos los relojes, totalmente asegurados y enviados por FedEx dentro de 1–2 días hábiles después del pago. Los compradores internacionales son responsables de los impuestos y aranceles locales. Los reembolsos por pérdida o robo se realizan solo tras la aprobación del seguro.',
        faq_q2: '¿Existen excepciones o artículos que no se pueden devolver?',
        faq_a2: ' Sí. Algunos artículos no son retornables, incluyendo relojes buscados específicamente por solicitud, piezas de pedido especial y artículos personalizados o hechos a medida.',
        faq_q3: ' ¿Qué métodos de pago aceptan?',
        faq_a3: 'Las compras o venta de relojes se pagan únicamente por transferencia bancaria, con instrucciones después de la venta. El comprador asume las comisiones y los envíos se realizan solo después de recibir los fondos.',
        faq_q4: '¿Cómo me protege Rollie de relojes falsos?',
        faq_a4: 'Rollie tiene una política de cero tolerancia con los relojes falsos. Cada pieza que pasa por nosotros es verificada profesionalmente, y asumimos total responsabilidad por su autenticidad. Si surge algún problema, lo afrontamos nosotros — sin excusas ni complicaciones. Nuestro objetivo es simple: una experiencia segura y transparente, con total confianza.',

        // Contact & Footer
        contact_title: '¿Listo para cotizar?',
        contact_desc: 'Escríbenos por WhatsApp y te damos una oferta en minutos.',
        footer_copyright: '© 2025 Rollie — Plataforma independiente. No afiliados a ninguna marcas.',
        footer_links: 'Términos • Privacidad'
    },
    en: {
        // Hero
        hero_title: 'Sell and buy your<br><span class="highlight-text">luxury watch</span><br>in a <span class="highlight-text">secure way</span>',
        hero_subtitle: 'Fast offers, real market prices and guaranteed authentication.',
        hero_btn_sell: 'SELL MY WATCH',
        hero_btn_buy: 'BUY YOUR WATCH',
        hero_tag_payment: 'Instant payment',
        hero_tag_shipping: 'Insured shipping',
        hero_tag_verify: 'Professional verification',
        hero_tag_quotes: '1,200+ quotes',
        
        // About
        about_title: 'ABOUT ROLLIE',
        about_desc: 'Rollie is a watch community shaped for modern collectors who care about discovery, clarity, and understanding what’s actually going on in the market. In a world where pricing can feel cloudy and information loosely fast — but not always accurate — Rollie brings honesty, perspective, and a grounded point of view. We offer a space where informed collecting feels natural, not overwhelming, and where real insight matters more than noise. Built around shared curiosity and a genuine love for watches. Rollie helps collectors move with confidence and stay connected to what truly counts.',
        
        // Team
        team_title: 'THE TEAM',
        team_role_co: 'CO-FOUNDER',
        team_role_partner: 'PARTNER',
        team_desc_andres: 'Product & Technology. Product leader with data platform experience; responsible for technology, real-time pricing, and WhatsApp/CRM integrations.',
        team_desc_jd: 'Strategy & Market. Expert in the secondary luxury watch market, in charge of partner network, authentication, and valuation of exclusive pieces.',
        team_desc_ivan: 'Engineering Lead with 13+ years of experience in mobile software and an entrepreneurial focus. Architect in innovative solutions using AI and Large Language Models (LLMs) to significantly boost business productivity.',
        team_desc_jm: 'Growth & Partnerships. Focused on expanding the Rollie community and developing strategic relationships with key collectors in the region.',

        // How it works
        how_title: 'HOW IT<br>WORKS',
        how_step1: 'Text us<br>on WhatsApp',
        how_step2: 'Send photos<br>and reference',
        how_step3: 'Receive a<br>firm offer',
        how_step4: 'Insured shipping<br>and payment',

        // Benefits
        ben_title1: 'Real market price',
        ben_desc1: 'Transactions, not inflated listings',
        ben_title2: 'Fast and simple',
        ben_desc2: 'Avg 12–36 hrs, all via WhatsApp',
        ben_title3: 'Secure',
        ben_desc3: 'Insured shipping, anti-fraud, pro verification',
        ben_title4: 'Transparent',
        ben_desc4: 'Offers valid 48 hrs, no fine print',

        // Reviews
        rev_text1: '"Sold my Submariner in 24 hours. Everything via WhatsApp and shipping was insured."',
        rev_auth1: 'Andrés Suárez - CDMX',
        rev_text2: '"They offered a fair price based on real market, not inflated listings."',
        rev_auth2: 'Juan - Bogotá',
        rev_text3: '"Super easy process: photos, offer, shipping label, and payment same day."',
        rev_auth3: 'Sofía - Lima',
        rev_text4: '"Excellent service, very professional and fast. Highly recommended."',
        rev_auth4: 'Carlos - Buenos Aires',

        // FAQ
        faq_title: 'FREQUENTLY ASKED QUESTIONS',
        faq_q1: 'What is your shipping policy?',
        faq_a1: 'We offer free worldwide shipping on all watches, fully insured and sent via FedEx within 1–2 business days after payment clears. International buyers are responsible for local taxes and duties. Lost or stolen packages are refunded only once the insurance claim is approved.',
        faq_q2: 'Are there any exceptions or items that cannot be returned?',
        faq_a2: 'Yes. Certain items are non-returnable, including watches sourced specifically by request, special-order pieces, and custom or personalized items.',
        faq_q3: 'What payment methods do you accept?',
        faq_a3: 'Watch purchases or sold are paid by bank wire only, with instructions provided after sale. Buyers cover any wire fees, and items ship only after funds are received.',
        faq_q4: 'How does Rollie protect me from counterfeits?',
        faq_a4: 'Rollie has a zero-tolerance policy for fake watches. Every piece that goes through us is professionally verified, and we take full responsibility for authenticity. If an issue ever arises, we own it — no excuses, no runaround. Our goal is simple: a safe, transparent experience with total confidence.',

        // Contact & Footer
        contact_title: 'Ready for a quote?',
        contact_desc: 'Message us on WhatsApp and we’ll send you an offer in minutes.',
        footer_copyright: '© 2025 Rollie — Independent platform. Not affiliated with any brands.',
        footer_links: 'Terms • Privacy'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    
    // --- TRANSLATION FUNCTIONALITY ---
    const langBtns = document.querySelectorAll('.lang-btn');
    
    // Function to update content
    function updateContent(lang) {
        // Update active button state
        langBtns.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Save preference
        localStorage.setItem('rollie_lang', lang);

        // Update Text
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // Check if content has HTML tags (like <br> or <span>)
                if (translations[lang][key].includes('<')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Initialize Language
    const savedLang = localStorage.getItem('rollie_lang') || 'es';
    updateContent(savedLang);

    // Event Listeners for Switcher
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            updateContent(lang);
        });
    });

    // --- END TRANSLATION FUNCTIONALITY ---

    // FAQ Toggle Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            // Removed unused 'isExpanded' variable
            
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

    // Button click handlers (Updated selector to include new buttons)
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .whatsapp-btn, .btn-dark, .btn-green, .contact-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle WhatsApp buttons
            // Added check for various potential button texts in both languages
            const text = this.textContent.toLowerCase();
            if (this.classList.contains('whatsapp-btn') || 
                text.includes('whatsapp') || 
                text.includes('vender') ||
                text.includes('sell') || 
                text.includes('buy') ||
                text.includes('comprar')) {
                
                // Replace with actual WhatsApp number
                const whatsappNumber = '1234567890'; // Replace with real number
                const message = encodeURIComponent('Hola, me interesa vender/comprar un reloj. / Hello, I am interested in buying/selling a watch.');
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