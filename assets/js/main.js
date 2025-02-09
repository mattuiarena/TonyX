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
}); 