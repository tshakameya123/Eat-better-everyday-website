// --- NAVBAR SCROLL EFFECT ---
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if we are scrolling DOWN and if we are not at the very top
    if (scrollTop > lastScrollTop && scrollTop > 50) {
        navbar.classList.add('nav-hidden');
    } else {
        navbar.classList.remove('nav-hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

// --- HAMBURGER MENU TOGGLE ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    if(hamburger) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}));

// --- FLIP CARDS LOGIC ---
const cards = document.querySelectorAll('.flip-card');

// 1. Logic for clicking ON a card
cards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Stop the click from bubbling up to the document (optional, but safer)
        e.stopPropagation();

        const isCardOpen = this.classList.contains('flipped');

        // Reset ALL cards (close others)
        cards.forEach(c => c.classList.remove('flipped'));

        // If the card you clicked was NOT open, open it now
        if (!isCardOpen) {
            this.classList.add('flipped');
        }
    });
});

// 2. Logic for clicking ANYWHERE ELSE (The new feature)
document.addEventListener('click', function(e) {
    // Check if the thing we clicked is NOT inside a flip-card
    if (!e.target.closest('.flip-card')) {
        // Remove the 'flipped' class from ALL cards
        cards.forEach(card => {
            card.classList.remove('flipped');
        });
    }
});

// --- CONTACT FORM ---
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Form logic
    });
}