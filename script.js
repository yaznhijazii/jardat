document.addEventListener('DOMContentLoaded', function() {
    // متغير لتخزين فهرس الشريحة الحالي لكل كاروسيل
    const carousels = document.querySelectorAll('.carousel');
    
    // دالة لإظهار الشرائح
    function showSlides(carousel, slideIndex) {
        const slides = carousel.querySelectorAll('img');
        if (slides.length === 0) return;
        
        // إخفاء جميع الشرائح
        slides.forEach(slide => slide.classList.remove('active'));
        
        // عرض الشريحة الحالية
        slides[slideIndex].classList.add('active');
    }
    
    // دالة للتنقل بين الشرائح
    function plusSlides(n, carousel) {
        const slides = carousel.querySelectorAll('img');
        if (slides.length === 0) return;
        
        let slideIndex = parseInt(carousel.getAttribute('data-slide-index') || '0', 10);
        
        // حساب الفهرس الجديد للشريحة
        slideIndex += n;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        
        // تعيين الفهرس الجديد في خاصية البيانات
        carousel.setAttribute('data-slide-index', slideIndex);
        
        // تحديث الشرائح
        showSlides(carousel, slideIndex);
    }
    
    // إضافة مستمعات للأحداث لجميع الكاروسيل
    carousels.forEach(carousel => {
        const carouselId = carousel.id;
        carousel.setAttribute('data-slide-index', '0'); // تعيين الفهرس الأول
        
        // تأكد من وجود أزرار التبديل
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        
        if (prevButton) {
            prevButton.addEventListener('click', () => plusSlides(-1, carousel));
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => plusSlides(1, carousel));
        }
        
        // تهيئة الشرائح
        showSlides(carousel, 0);
    });
});
