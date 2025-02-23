document.addEventListener('DOMContentLoaded', function() {
    // Preload critical images (slider images)
    const criticalImages = document.querySelectorAll('.slider-item .img');
    criticalImages.forEach(item => {
        const bgImage = getComputedStyle(item).backgroundImage.slice(4, -1).replace(/"/g, "");
        if (bgImage !== 'none') {
            const img = new Image();
            img.src = bgImage;
        }
    });

    // Lazy load other images
    const lazyImages = document.querySelectorAll('.project img, .blog-img img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});
