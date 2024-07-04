document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
            navLinks.classList.remove('active');
        });
    });

    const contactForm = document.querySelector('#order form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Your order has been placed!');
        contactForm.reset();
    });
});
