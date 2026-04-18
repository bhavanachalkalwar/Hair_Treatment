// ContactPage JavaScript
class ContactPage {
    constructor() {
        this.init();
    }

    init() {
        this.addFadeInAnimations();
        this.initContactForm();
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

    initContactForm() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                // Don't prevent default - let FormSubmit handle it
                this.showLoadingAnimation();
            });
        }
    }

    showLoadingAnimation() {
        const submitBtn = document.querySelector('#contactForm button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Re-enable button after 3 seconds in case of error
        setTimeout(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }, 3000);
    }
}

// Initialize ContactPage when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContactPage();
});