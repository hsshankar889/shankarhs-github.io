document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add scroll animation for sections (requires a CSS class like 'animate-fade-in')
    // const sections = document.querySelectorAll('section');
    // const observerOptions = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 0.1
    // };

    // const observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('fade-in-up'); // Add a class for animation
    //             observer.unobserve(entry.target);
    //         }
    //     });
    // }, observerOptions);

    // sections.forEach(section => {
    //     observer.observe(section);
    // });
});