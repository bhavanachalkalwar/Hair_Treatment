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
                e.preventDefault(); // Prevent default form submission
                this.submitForm();
            });
        }
    }

    async submitForm() {
        const form = document.getElementById('contactForm');
        const submitBtn = form.querySelector('button[type="submit"]');
        const formData = new FormData(form);

        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success - show success message
                this.showSuccessMessage();
                form.reset(); // Clear the form
            } else {
                // Error - show error message
                this.showErrorMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            // Network error
            this.showErrorMessage('Network error. Please check your connection and try again.');
        } finally {
            // Reset button
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }
    }

    showSuccessMessage() {
        const formSection = document.getElementById('contact-form');
        const container = formSection.querySelector('.container');

        // Remove existing messages
        const existingMessage = container.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create and show success message
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message success';
        messageDiv.innerHTML = `
            <div class="message-content">
                <h3>Message Sent Successfully! ✅</h3>
                <p>Thank you for contacting us. Our Ayurvedic experts will get back to you within 24 hours.</p>
                <a href="index.html" class="cta-button">Return to Home</a>
            </div>
        `;

        // Hide the form and show message
        const form = document.getElementById('contactForm');
        form.style.display = 'none';
        container.appendChild(messageDiv);
    }

    showErrorMessage(message) {
        const formSection = document.getElementById('contact-form');
        const container = formSection.querySelector('.container');

        // Remove existing messages
        const existingMessage = container.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create and show error message
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message error';
        messageDiv.innerHTML = `
            <div class="message-content">
                <h3>Error</h3>
                <p>${message}</p>
            </div>
        `;

        container.appendChild(messageDiv);

        // Remove error message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
        }, 3000);
    }
}

// Initialize ContactPage when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContactPage();
});