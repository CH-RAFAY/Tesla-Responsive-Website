const config = {
    logoSelector: '#logo',
    logoLink: 'index.html',
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










  document.addEventListener('DOMContentLoaded', function() {
    const carLicensePopupBtn = document.getElementById("carLicensePopupBtn");
    const carLicensePopupOverlay = document.getElementById("carLicensePopupOverlay");
    const carLicenseCloseBtn = document.getElementById("carLicenseCloseBtn");
    let carLicenseScrollTimer;
    let carLicenseLastScrollTop = 0;
    let carLicenseIsScrolling = false;

    const carLicenseShowButton = () => {
        carLicensePopupBtn.classList.add('car-visible');
    };

    const carLicenseHideButton = () => {
        carLicensePopupBtn.classList.remove('car-visible');
    };

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > carLicenseLastScrollTop && !carLicenseIsScrolling) {
            carLicenseIsScrolling = true;
            carLicenseShowButton();
        }
        carLicenseLastScrollTop = scrollTop;
        clearTimeout(carLicenseScrollTimer);
        carLicenseScrollTimer = setTimeout(() => {
            carLicenseIsScrolling = false;
            carLicenseHideButton();
        }, 100); 
    });

    carLicensePopupBtn.addEventListener("click", () => {
        carLicensePopupOverlay.classList.add("car-license-show-popup");
    });

    carLicenseCloseBtn.addEventListener("click", () => {
        carLicensePopupOverlay.classList.remove("car-license-show-popup");
    });

    carLicensePopupOverlay.addEventListener("click", (event) => {
        if (event.target === carLicensePopupOverlay) {
            carLicensePopupOverlay.classList.remove("car-license-show-popup");
        }
    });
});