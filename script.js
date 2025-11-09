window.onscroll = function () {
    const navbar = document.querySelector('.navbar')
    const navFixed = navbar.offsetTop;
    
    if (window.pageYOffset > navFixed) {
        navbar.classList.add('blur')
    } else {
        navbar.classList.remove('blur')
    }

}

