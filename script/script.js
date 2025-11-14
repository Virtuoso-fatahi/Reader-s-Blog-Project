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

// Form validation and submission
const contactForm = document.querySelector('.contact__form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        if (!fullname) {
            alert('Please enter your full name.');
            return;
        }
        if (!email || !isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!message) {
            alert('Please enter a message.');
            return;
        }
        
        // If validation passes, submit the form
        alert('Thank you for your message! We will get back to you soon.');
        this.submit();
    });
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Active navigation link highlighting
document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.header__ul a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.style.fontWeight = 'bold';
            link.style.textDecoration = 'underline';
        }
    });
});

// Table row hover effect
const tableBodies = document.querySelectorAll('table tbody');
tableBodies.forEach(tbody => {
    tbody.addEventListener('mouseover', function (e) {
        if (e.target.tagName === 'TD' || e.target.tagName === 'TH') {
            e.target.parentElement.style.backgroundColor = '#f0f0f0';
        }
    });
    
    tbody.addEventListener('mouseout', function (e) {
        if (e.target.tagName === 'TD' || e.target.tagName === 'TH') {
            e.target.parentElement.style.backgroundColor = '';
        }
    });
});

// Back to top button functionality
const backToTopLinks = document.querySelectorAll('a[href="#"]');
backToTopLinks.forEach(link => {
    if (link.textContent.includes('Back to Top')) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Show/hide details element animation
const detailsElements = document.querySelectorAll('details');
detailsElements.forEach(detail => {
    detail.addEventListener('toggle', function () {
        if (this.open) {
            this.style.animation = 'slideDown 0.3s ease-out';
        }
    });
});

// Log page load time
window.addEventListener('load', function () {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});

// Mobile menu toggle (if you want to add a mobile menu later)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.header__nav');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Add event listener for keyboard accessibility
document.addEventListener('keydown', function (e) {
    // ESC key to close any open details
    if (e.key === 'Escape') {
        detailsElements.forEach(detail => {
            if (detail.open) {
                detail.open = false;
            }
        });
    }
});