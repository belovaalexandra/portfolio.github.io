'use strict'

window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
		  overlay = document.querySelector('.overlay1'),
          close = document.querySelector('.menu__close'),
          menu = document.querySelector('.menu');

    // hamburger.addEventListener('click', () => {
    //     overlay.classList.toggle('overlay_active');
    // });
    hamburger.addEventListener('click', function() {
        overlay.style.display = 'block';
    })

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
    })

})