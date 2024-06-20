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
    const separator = document.querySelector('.separator1, separator2');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 2s 3s forwards'; // 2s animation with 1s delay
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(separator);
});


document.addEventListener("DOMContentLoaded", function() {
    var p1 = document.querySelector('.p1');
    var box1 = document.querySelector('.box1');

    p1.addEventListener('mouseover', function() {
        box1.style.display = 'block';
    });

    p1.addEventListener('mouseout', function() {
        box1.style.display = 'none';
    });
});

