document.addEventListener('DOMContentLoaded', function() {
    // Handle notification banner close button
    const notificationBanner = document.querySelector('.notification-banner');
    const closeBtn = document.querySelector('.notification-banner .close-btn');

    if (closeBtn && notificationBanner) {
        closeBtn.addEventListener('click', function() {
            notificationBanner.style.display = 'none';
        });
    }

    // Add hover effect to nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'var(--bg-lighter)';
            }
        });

        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'transparent';
            }
        });
    });

    // Add hover effect to function cards
    const functionCards = document.querySelectorAll('.function-card');
    functionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}); 