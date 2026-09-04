/* ==========================================
   SOLESHIFT WEBSITE - JAVASCRIPT
   This file makes the website interactive
   ========================================== */

// Smooth scrolling for navigation links
// When you click a link, the page smoothly scrolls to that section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll animation to cards
// Cards fade in and slide up when you scroll to them
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // When card comes into view, make it visible
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Select all cards and set up animation
document.querySelectorAll('.problem-card, .product-card, .team-member').forEach(card => {
    // Start invisible and below
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-in-out';
    
    // Watch this card for when it enters view
    observer.observe(card);
});
