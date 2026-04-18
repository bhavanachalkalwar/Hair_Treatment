// HomePage JavaScript
class HomePage {
    constructor() {
        this.init();
    }

    init() {
        this.addFadeInAnimations();
        this.initHeroAnimation();
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

    initHeroAnimation() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(20px)';
            setTimeout(() => {
                heroContent.style.transition = 'opacity 1s, transform 1s';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 500);
        }
    }
}

// Initialize HomePage when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HomePage();
});