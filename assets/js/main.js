// Add your JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    console.log('Website loaded successfully!');

    // Check if it's mobile view (width <= 1200px)
    if (window.innerWidth <= 1200) {
        // Calculate the center position
        const pageWidth = 1200; // Our fixed page width
        const screenWidth = window.innerWidth;
        const scrollPosition = (pageWidth - screenWidth) / 2;
        
        // Scroll to center horizontally
        window.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }

    // Mobile Menu Functionality
    const menuButton = document.querySelector('.mobile-menu-button');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const closeButton = document.querySelector('.close-menu');
    const menuLinks = document.querySelectorAll('.mobile-nav a');

    // Open menu
    menuButton.addEventListener('click', function() {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    // Close menu
    closeButton.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    });

    // Close menu when clicking outside
    menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
}); 