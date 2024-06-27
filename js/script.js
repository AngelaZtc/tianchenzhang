document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('.designer');
    element.style.opacity = 0;
    element.style.transition = 'opacity 2s ease-in-out';

    setTimeout(function() {
        element.style.opacity = 1;
    }, 100);
});


document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('.text');
    element.style.opacity = 0;
    element.style.transition = 'opacity 6s ease-in-out';

    setTimeout(function() {
        element.style.opacity = 1;
    }, 100);
});


document.addEventListener("DOMContentLoaded", function() {
    const separators = document.querySelectorAll('.separator1, .separator2');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    separators.forEach(separator => {
        observer.observe(separator);
    });
});




document.addEventListener("DOMContentLoaded", function() {
    var hoverPairs = [
        { hoverElement: '.p1', boxElement: '.box1' },
        { hoverElement: '.p2', boxElement: '.box2' },
        { hoverElement: '.p3', boxElement: '.box3' },
        { hoverElement: '.p4', boxElement: '.box4' },
        { hoverElement: '.p5', boxElement: '.box5' },
        { hoverElement: '.p6', boxElement: '.box6' },
        { hoverElement: '.p7', boxElement: '.box7' },
        { hoverElement: '.p8', boxElement: '.box8' },
    ];

    hoverPairs.forEach(function(pair) {
        var hoverElement = document.querySelector(pair.hoverElement);
        var boxElement = document.querySelector(pair.boxElement);

        hoverElement.addEventListener('mouseover', function() {
            boxElement.classList.add('show');
        });

        hoverElement.addEventListener('mouseout', function() {
            boxElement.classList.remove('show');
        });
    });
});




