let lastScrollTop = 0;
let isScrolling;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        header.style.top = `-${headerHeight}px`;
        header.classList.remove('scrolling', 'static');
    } else {
        header.style.top = '0';
        header.classList.add('scrolling');
        header.classList.remove('static');
    }
    
    lastScrollTop = Math.max(scrollTop, 0);
    clearTimeout(isScrolling);

    isScrolling = setTimeout(function() {
        header.classList.remove('scrolling');
        header.classList.add('static');
    }, 200);
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});