// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle (for future responsiveness)
    const initMobileMenu = () => {
        const menuToggle = document.createElement('div');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.innerHTML = '☰';
        document.querySelector('.navbar').prepend(menuToggle);
        
        menuToggle.addEventListener('click', function() {
            document.querySelector('.navbar ul').classList.toggle('active');
        });
    };

    // Initialize mobile menu if screen is small
    if (window.innerWidth <= 768) {
        initMobileMenu();
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic year for footer (if added later)
    const yearElement = document.querySelector('.year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ===== UPDATED FURNITURE CARD HOVER EFFECT =====
    document.querySelectorAll('.furniture-card').forEach(card => {
        // Initialize price tag position
        const priceTag = card.querySelector('.price-tag');
        if (priceTag) {
            priceTag.style.position = 'absolute';
            priceTag.style.top = '10px';
            priceTag.style.right = '10px';
            priceTag.style.zIndex = '10';
        }

        // Hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(110, 69, 226, 0.2)';
            
            // Lock price tag position during animation
            if (priceTag) {
                priceTag.style.transform = 'translateZ(0)'; // Force hardware acceleration
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Original card hover effects (for non-furniture cards)
    document.querySelectorAll('.card:not(.furniture-card)').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
    });

    // Particle.js initialization fallback
    if (typeof particlesJS === 'undefined') {
        console.warn('particlesJS not loaded - check CDN link');
    } else {
        console.log('Particles.js loaded successfully');
    }
});

// Window resize event listener
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const mobileMenu = document.querySelector('.mobile-menu-toggle');
        const navList = document.querySelector('.navbar ul');
        if (mobileMenu) mobileMenu.remove();
        if (navList) navList.classList.remove('active');
    } else if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
        initMobileMenu();
    }
});

// Helper function for future AJAX loading
function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Initialize menu function for resize event
function initMobileMenu() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    document.querySelector('.navbar').prepend(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('.navbar ul').classList.toggle('active');
    });
}
