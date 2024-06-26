
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

// enlarge images
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.images img');

    images.forEach(image => {
        image.addEventListener('click', function() {
            if (this.classList.contains('enlarged')) {
                this.classList.remove('enlarged');
            } else {
                // Remove 'enlarged' class from any other image
                images.forEach(img => img.classList.remove('enlarged'));
                this.classList.add('enlarged');
            }
        });
    });
});
