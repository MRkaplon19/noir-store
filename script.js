// script.js

// Function for smooth scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listener for newsletter signup
const signupForm = document.querySelector('#newsletterSignup');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = signupForm.querySelector('input[type="email"]').value;
        alert(`Thank you for signing up, ${email}!`);
        // Add further logic for handling the newsletter signup.
    });
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Initial call
animateOnScroll();
