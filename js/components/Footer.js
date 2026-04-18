// Footer Component
class Footer {
    constructor() {
        this.footerElement = document.getElementById('footer');
        this.render();
    }

    render() {
        this.footerElement.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <p>&copy; 2024 Kesh Sakhi - Hair Care Ayurvedic Companion. All rights reserved.</p>
                    <p>Bringing ancient Ayurvedic wisdom to modern hair care.</p>
                </div>
            </footer>
        `;
    }
}

// Initialize footer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Footer();
});