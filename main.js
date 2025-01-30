document.addEventListener("DOMContentLoaded", function () {
    function isElementInView(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight;
    }

    const elements = document.querySelectorAll('.animate-on-scroll');

    function onScroll() {
        elements.forEach((el) => {
            if (isElementInView(el)) {
                el.classList.add('visible');  
            }
        });
    }

    window.addEventListener('scroll', onScroll);

    onScroll();
});
