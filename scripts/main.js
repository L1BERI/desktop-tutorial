
let stickyheader = document.querySelector('.sticky-header');
let header = document.querySelector('.header__inner');
let burgerMenu = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile-menu');
let headerHeight = header.offsetHeight;
let bodyScroll = document.querySelector('.body');


window.addEventListener('scroll', function () {
    if (window.scrollY < headerHeight) {
        stickyheader.classList.add('hidden');
        // header.classList.remove('hidden');
    } else {
        stickyheader.classList.remove('hidden');
        // header.classList.add('hidden');
    }

})




burgerMenu.addEventListener('click', function (e) {
    mobileMenu.classList.toggle('mobile-active');
    burgerMenu.classList.toggle('burger-active');
    stickyheader.classList.toggle('sticky-shadow')
    if (burgerMenu.classList.contains('burger-active')) {
        document.body.style.overflow = 'hidden'
    } else {

        document.body.style.overflow = 'visible';
    }
})