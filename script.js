document.addEventListener('DOMContentLoaded', function() {
    // Variable to store the current slide index for each carousel
    const carousels = document.querySelectorAll('.carousel');
    
    // Function to show slides
    function showSlides(carousel, slideIndex) {
        const slides = carousel.querySelectorAll('img');
        if (slides.length === 0) return;
        
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Show the current slide
        slides[slideIndex].classList.add('active');
    }
    
    // Function to navigate between slides
    function plusSlides(n, carousel) {
        const slides = carousel.querySelectorAll('img');
        if (slides.length === 0) return;
        
        let slideIndex = parseInt(carousel.getAttribute('data-slide-index') || '0', 10);
        
        // Calculate the new slide index
        slideIndex += n;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        
        // Set the new index in the data attribute
        carousel.setAttribute('data-slide-index', slideIndex);
        
        // Update slides
        showSlides(carousel, slideIndex);
    }
    
    // Add event listeners to all carousels
    carousels.forEach(carousel => {
        carousel.setAttribute('data-slide-index', '0'); // Set initial index
        
        // Ensure there are navigation buttons
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        
        if (prevButton) {
            prevButton.addEventListener('click', () => plusSlides(-1, carousel));
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => plusSlides(1, carousel));
        }
        
        // Initialize slides
        showSlides(carousel, 0);
    });
});
