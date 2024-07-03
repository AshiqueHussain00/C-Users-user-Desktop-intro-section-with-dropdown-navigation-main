document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
    const closeBtn = document.querySelector('.side-menu .close-btn');
    const overlay = document.querySelector('.side-menu .overlay');

    hamburger.addEventListener('click', function() {
        sideMenu.style.right = '0';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.style.right = '-100%';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function() {
        sideMenu.style.right = '-100%';
        overlay.style.display = 'none';
    });
});
