// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.promo_inner'),
//     menuItem = document.querySelectorAll('.promo__list'),
//     hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger_active');
//         menu.classList.toggle('menu_active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('hamburger_active');
//             menu.classList.toggle('menu_active');
//         })
//     })
// })


'use strict'

window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
		  overlay = document.querySelector('.overlay'),
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



