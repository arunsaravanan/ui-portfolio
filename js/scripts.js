/*!
* Start Bootstrap - Resume v7.0.3 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    var lightbox = new SimpleLightbox('.gallery a', {
        showCounter: false,
        doubleTapZoom: 1,
        swipeClose: false,
        disableRightClick: true,
        history: false,
        captionsData: 'data'
    });
    var clients = [
        {
            "ikea": "https://publications-us-en.ikea.com/ikea_kitchen_2022/page/1"
        },
        {
            "oriflame": "https://uk.oriflame.com/products/digital-catalogue-current?pageNumber=1&catalogue=2021012",
        },
        {
            "buyautoparts": "https://www.buyautoparts.com/"
        },
        {
            "zerust": "https://www.zerust-oilgas.com/"
        }
    ];
    lightbox.on('shown.simplelightbox', function () {
        var img = document.getElementsByClassName("sl-image")[0];
        if (img) {

            img.style.cursor = 'pointer';
            img.onclick = function (evt) {
                for (var i = 0; i < clients.length; i++) {
                    var key = Object.keys(clients[i])[0];
                    if (evt.target.src.toString().indexOf(key) != -1) {
                        window.open(clients[i][key], '_blank');
                    }
                }
            }
        }
    });
});
