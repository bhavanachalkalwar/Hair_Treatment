// FAQ Accordion Component
class FAQAccordion {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        this.init();
    }

    init() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            question.addEventListener('click', () => {
                this.toggleItem(item, question, answer);
            });
        });
    }

    toggleItem(item, question, answer) {
        // Check if this item is already open
        const isActive = question.classList.contains('active');

        // Close all other items
        this.faqItems.forEach(otherItem => {
            const otherQuestion = otherItem.querySelector('.faq-question');
            const otherAnswer = otherItem.querySelector('.faq-answer');

            if (otherItem !== item) {
                otherQuestion.classList.remove('active');
                otherAnswer.classList.remove('active');
            }
        });

        // Toggle current item
        if (isActive) {
            question.classList.remove('active');
            answer.classList.remove('active');
        } else {
            question.classList.add('active');
            answer.classList.add('active');
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FAQAccordion();
});
