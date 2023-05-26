// Hamburger Button
const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", function () {
    menuNav.classList.toggle("menu-active");
});

// Scroll Animation
(function() {
    var slideIndex = 0;
    var slides = document.querySelectorAll('.promotion-item img');
    var slideInterval = setInterval(nextSlide, 3000);

    function nextSlide() {
        slides[slideIndex].classList.remove('active');
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add('active');
    }
})();