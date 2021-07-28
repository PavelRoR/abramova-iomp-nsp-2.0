window.addEventListener('DOMContentLoaded', function () {
    var mobMenu = document.querySelector('.mobile-menu'),
        headNav = document.querySelector('.header-nav'),
        mml1 = document.querySelector('.mobile-menu-line-1'),
        mml2 = document.querySelector('.mobile-menu-line-2'),
        mml3 = document.querySelector('.mobile-menu-line-3');

    mobMenu.addEventListener('click', function () {
        if (!headNav.classList.contains('nav-active')) {
            this.style.position = 'fixed';
            headNav.classList.add('nav-active');
            mml1.classList.add('switched');
            mml2.classList.add('switched');
            mml3.classList.add('switched');
        } else {
            this.style.position = 'absolute';
            headNav.classList.remove('nav-active');
            mml1.classList.remove('switched');
            mml2.classList.remove('switched');
            mml3.classList.remove('switched');
        }
    });
});