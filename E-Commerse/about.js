// About page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeAboutPage();
});

function initializeAboutPage() {
    // Mobile menu functionality
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', handleContactSubmit);
    
    // Smooth scrolling for navigation links
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
    
    // Initialize animations
    initializeScrollAnimations();
    
    // Counter animation for stats
    animateCounters();
}

// Contact form handler
function handleContactSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('Thank you for your message! We\'ll get back to you soon.');
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--accent-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Initialize scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.value-card, .team-member, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const isTime = target.includes('/');
    
    if (isTime) return; // Skip 24/7 animation
    
    const numericTarget = parseInt(target.replace(/[^\d]/g, ''));
    const suffix = target.replace(/[\d]/g, '');
    
    let current = 0;
    const increment = numericTarget / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
            current = numericTarget;
            clearInterval(timer);
        }
        
        if (isPercentage) {
            element.textContent = current.toFixed(1) + '%';
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 40);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .about-hero {
        padding: 8rem 0 4rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        text-align: center;
    }
    
    .about-title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    
    .about-subtitle {
        font-size: 1.25rem;
        opacity: 0.9;
    }
    
    .about-content {
        padding: 4rem 0;
    }
    
    .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
    }
    
    .about-text h2 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: var(--text-primary);
    }
    
    .about-text p {
        font-size: 1.125rem;
        line-height: 1.7;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
    }
    
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .stat-item {
        text-align: center;
        opacity: 0;
        transform: translateY(2rem);
        transition: all 0.6s ease-out;
    }
    
    .stat-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }
    
    .stat-label {
        color: var(--text-secondary);
        font-weight: 500;
    }
    
    .about-image img {
        width: 100%;
        height: auto;
        border-radius: 1rem;
        box-shadow: var(--shadow-xl);
    }
    
    .values-section {
        padding: 4rem 0;
        background: var(--bg-secondary);
    }
    
    .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .value-card {
        background: white;
        padding: 2rem;
        border-radius: var(--border-radius);
        text-align: center;
        box-shadow: var(--shadow-sm);
        opacity: 0;
        transform: translateY(2rem);
        transition: all 0.6s ease-out;
    }
    
    .value-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .value-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
    }
    
    .value-icon {
        width: 4rem;
        height: 4rem;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        color: white;
        font-size: 1.5rem;
    }
    
    .value-card h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--text-primary);
    }
    
    .value-card p {
        color: var(--text-secondary);
        line-height: 1.6;
    }
    
    .team-section {
        padding: 4rem 0;
    }
    
    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .team-member {
        background: white;
        border-radius: var(--border-radius);
        overflow: hidden;
        box-shadow: var(--shadow-sm);
        opacity: 0;
        transform: translateY(2rem);
        transition: all 0.6s ease-out;
    }
    
    .team-member.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .team-member:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
    }
    
    .member-image {
        aspect-ratio: 1;
        overflow: hidden;
    }
    
    .member-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: var(--transition);
    }
    
    .team-member:hover .member-image img {
        transform: scale(1.05);
    }
    
    .member-info {
        padding: 1.5rem;
        text-align: center;
    }
    
    .member-info h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
    }
    
    .member-role {
        color: var(--primary-color);
        font-weight: 500;
        margin-bottom: 1rem;
    }
    
    .member-bio {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    
    .member-social {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    
    .member-social a {
        width: 2rem;
        height: 2rem;
        background: var(--bg-secondary);
        color: var(--text-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        text-decoration: none;
        transition: var(--transition);
    }
    
    .member-social a:hover {
        background: var(--primary-color);
        color: white;
    }
    
    .contact-section {
        padding: 4rem 0;
        background: var(--bg-secondary);
    }
    
    .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
    }
    
    .contact-info h2 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--text-primary);
    }
    
    .contact-info p {
        font-size: 1.125rem;
        color: var(--text-secondary);
        margin-bottom: 2rem;
    }
    
    .contact-details {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .contact-item {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .contact-icon {
        width: 3rem;
        height: 3rem;
        background: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
    }
    
    .contact-item h4 {
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: var(--text-primary);
    }
    
    .contact-item p {
        color: var(--text-secondary);
        margin: 0;
    }
    
    .contact-form {
        background: white;
        padding: 2rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-sm);
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    .form-group label {
        display: block;
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
    }
    
    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 0.875rem;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        font-size: 1rem;
        transition: var(--transition);
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
    
    .form-group textarea {
        resize: vertical;
        min-height: 120px;
    }
    
    @media (max-width: 768px) {
        .about-title {
            font-size: 2rem;
        }
        
        .about-grid,
        .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .values-grid,
        .team-grid {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(style);