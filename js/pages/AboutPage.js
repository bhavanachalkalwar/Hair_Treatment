// AboutPage JavaScript
class AboutPage {
    constructor() {
        this.init();
    }

    init() {
        this.addFadeInAnimations();
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
}

// Initialize AboutPage when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AboutPage();
});