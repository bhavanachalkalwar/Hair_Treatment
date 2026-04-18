// Testimonial Carousel Component
class TestimonialCarousel {
    constructor() {
        this.currentSlide = 0;
        this.wrapper = document.querySelector('.testimonials-wrapper');
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.prevBtn = document.getElementById('testimonialPrev');
        this.nextBtn = document.getElementById('testimonialNext');
        this.dotsContainer = document.getElementById('testimonialDots');

        if (this.slides.length === 0) return;

        this.totalSlides = this.slides.length;
        this.init();
    }

    init() {
        this.createDots();
        this.attachEventListeners();
        this.updateSlide();
        this.autoSlide();
    }

    createDots() {
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                this.currentSlide = i;
                this.updateSlide();
                this.resetAutoSlide();
            });
            this.dotsContainer.appendChild(dot);
        }
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => {
            this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
            this.updateSlide();
            this.resetAutoSlide();
        });

        this.nextBtn.addEventListener('click', () => {
            this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
            this.updateSlide();
            this.resetAutoSlide();
        });
    }

    updateSlide() {
        const offset = -this.currentSlide * 100;
        this.wrapper.style.transform = `translateX(${offset}%)`;

        // Update dots
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    autoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
            this.updateSlide();
        }, 5000);
    }

    resetAutoSlide() {
        clearInterval(this.autoSlideInterval);
        this.autoSlide();
    }
}

// Initialize when DOM is loaded
if (document.querySelector('.testimonials-wrapper')) {
    document.addEventListener('DOMContentLoaded', () => {
        new TestimonialCarousel();
    });
}
