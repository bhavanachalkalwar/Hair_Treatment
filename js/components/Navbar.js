// Navbar Component
class Navbar {
    constructor() {
        this.navbarElement = document.getElementById('navbar');
        this.render();
        this.initSmoothScroll();
    }

    render() {
        this.navbarElement.innerHTML = `
            <nav class="navbar">
                <div class="container">
                    <div class="brand">
                        <img id="navbar-logo" src="images/logo.png" alt="Kesh Sakhi logo" class="brand-logo">
                        <div>
                            <div class="logo">Kesh Sakhi</div>
                            <div class="logo-tagline">Ayurvedic Hair Care Companion</div>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="consultation.html">Consultation</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </nav>
        `;
    }

    initSmoothScroll() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Initialize navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navbar();
});