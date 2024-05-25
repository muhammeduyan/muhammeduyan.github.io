
$(document).ready(function() {

    home.on('click', function() {
        console.log('home clicked');
        window.location.href = 'index.html';
    });

    about.on('click', function() {
        console.log('about clicked');
        window.location.href = 'about.html';
    });
});