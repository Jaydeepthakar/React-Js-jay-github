// Product data
const products = [
    {
        id: 1,
        title: "iPhone 15 Pro",
        category: "smartphones",
        price: 999,
        originalPrice: 1099,
        image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.8,
        reviews: 324,
        badge: "New"
    },
    {
        id: 2,
        title: "MacBook Pro 16\"",
        category: "laptops",
        price: 2399,
        originalPrice: 2599,
        image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.9,
        reviews: 156,
        badge: "Popular"
    },
    {
        id: 3,
        title: "AirPods Pro",
        category: "accessories",
        price: 249,
        originalPrice: 279,
        image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.7,
        reviews: 892,
        badge: "Sale"
    },
    {
        id: 4,
        title: "Samsung Galaxy S24",
        category: "smartphones",
        price: 899,
        originalPrice: 999,
        image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.6,
        reviews: 234,
        badge: "Hot"
    },
    {
        id: 5,
        title: "Dell XPS 13",
        category: "laptops",
        price: 1299,
        originalPrice: 1499,
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.5,
        reviews: 178,
        badge: "Sale"
    },
    {
        id: 6,
        title: "Sony WH-1000XM4",
        category: "accessories",
        price: 349,
        originalPrice: 399,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.8,
        reviews: 567,
        badge: "Popular"
    },
    {
        id: 7,
        title: "iPad Pro 12.9\"",
        category: "smartphones",
        price: 1099,
        originalPrice: 1199,
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.7,
        reviews: 289,
        badge: "New"
    },
    {
        id: 8,
        title: "Gaming Mechanical Keyboard",
        category: "accessories",
        price: 159,
        originalPrice: 199,
        image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.4,
        reviews: 445,
        badge: "Sale"
    }
];

// Cart functionality
let cart = [];
let currentFilter = 'all';

// DOM elements
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const cartBtn = document.querySelector('.cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartClose = document.getElementById('cart-close');
const overlay = document.getElementById('overlay');
const cartCount = document.querySelector('.cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const productsGrid = document.getElementById('products-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartUI();
    initializeEventListeners();
    initializeAnimations();
});

// Event listeners
function initializeEventListeners() {
    // Mobile menu toggle
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Cart sidebar
    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);
    
    // Product filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.dataset.filter;
            setActiveFilter(filter);
            filterProducts(filter);
        });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    
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
    
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
}

// Mobile menu functionality
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Cart functionality
function openCart() {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    showNotification('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
    
    // Render cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: auto; background: #ef4444; color: white;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Product filtering
function setActiveFilter(filter) {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    currentFilter = filter;
}

function filterProducts(filter) {
    const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);
    renderProducts(filteredProducts);
}

// Render products
function renderProducts(productsToRender = products) {
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card animate-fade-in-up" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <div class="product-badge">${product.badge}</div>
                <div class="product-actions">
                    <button class="action-btn" title="Add to Wishlist">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-text">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="price">$${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt star"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star star"></i>';
    }
    
    return stars;
}

// Newsletter form handler
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    showNotification('Thank you for subscribing!');
    e.target.reset();
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Add notification styles
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
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = 'var(--shadow-md)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
}

// Initialize animations
function initializeAnimations() {
    // Add CSS for notification animations
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
        
        .notification {
            animation: slideInRight 0.3s ease-out;
        }
    `;
    document.head.appendChild(style);
    
    // Intersection Observer for scroll animations
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
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(2rem)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Search functionality (placeholder)
document.querySelector('.search-btn').addEventListener('click', () => {
    showNotification('Search feature coming soon!', 'info');
});

// Checkout functionality (placeholder)
document.addEventListener('click', (e) => {
    if (e.target.textContent === 'Checkout') {
        showNotification('Checkout feature coming soon!', 'info');
    }
});

// Wishlist functionality (placeholder)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-heart')) {
        e.target.classList.toggle('fas');
        e.target.classList.toggle('far');
        const message = e.target.classList.contains('fas') ? 'Added to wishlist!' : 'Removed from wishlist!';
        showNotification(message);
    }
});

// Quick view functionality (placeholder)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-eye')) {
        showNotification('Quick view feature coming soon!', 'info');
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCart();
        navMenu.classList.remove('active');
    }
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}