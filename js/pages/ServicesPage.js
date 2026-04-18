// ServicesPage JavaScript
class ServicesPage {
    constructor() {
        this.init();
    }

    init() {
        this.addFadeInAnimations();
        this.initServiceHoverEffects();
    }

    addFadeInAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe sections for fade-in animation
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    initServiceHoverEffects() {
        const serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-5px)';
                item.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0)';
                item.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            });
        });
    }
}

// Initialize ServicesPage when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ServicesPage();
});