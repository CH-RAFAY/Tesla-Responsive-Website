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


document.querySelectorAll('.purchase-options div').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.purchase-options div').forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelectorAll('.price-options div').forEach(price => {
    price.addEventListener('click', function() {
        document.querySelectorAll('.price-options div').forEach(pr => pr.classList.remove('selected'));
        this.classList.add('selected');
    });
});


const config = {
    logoSelector: '#logo',
    logoLink: 'https://example.com',
    transitionDuration: 300,
  };
  
  function smoothPageTransition(event) {
    const link = event.currentTarget;
    
    if (
      link.href &&
      link.hostname === window.location.hostname &&
      link.pathname !== window.location.pathname
    ) {
      event.preventDefault();
      
      document.body.style.opacity = 0;
      
      setTimeout(() => {
        window.location.href = link.href;
      }, config.transitionDuration);
    }
  }
  
  function handleLogoClick(event) {
    event.preventDefault();
    
    document.body.style.opacity = 0;
    
    setTimeout(() => {
      window.location.href = config.logoLink;
    }, config.transitionDuration);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector(config.logoSelector);
    if (logo) {
      logo.addEventListener('click', handleLogoClick);
    }
    
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', smoothPageTransition);
    });
  });
  
  const style = document.createElement('style');
  style.textContent = `
    body {
      transition: opacity ${config.transitionDuration}ms ease-in-out;
    }
  `;
  document.head.appendChild(style);