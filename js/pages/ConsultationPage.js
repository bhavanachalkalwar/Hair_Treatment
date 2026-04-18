// ConsultationPage JavaScript
class ConsultationPage {
    constructor() {
        this.init();
    }

    init() {
        this.addFadeInAnimations();
        this.initFormValidation();
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

    initFormValidation() {
        // Note: Since the form is embedded in an iframe, validation is handled by Google Forms
        // This is just a placeholder for any additional client-side validation if needed
        console.log('Consultation form loaded. Validation handled by Google Forms.');
    }
}

// Initialize ConsultationPage when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ConsultationPage();
});