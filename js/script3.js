
document.addEventListener("DOMContentLoaded", function () {
    var arrow2 = document.querySelector('.arrow2');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            arrow2.classList.add('show');
        } else {
            arrow2.classList.remove('show');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.images img');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    images.forEach(function(image) {
        observer.observe(image);
    });
});


