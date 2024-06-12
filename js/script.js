document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('.designer');
    element.style.opacity = 0;
    element.style.transition = 'opacity 2s ease-in-out';

    setTimeout(function() {
        element.style.opacity = 1; 
    }, 100);
});
