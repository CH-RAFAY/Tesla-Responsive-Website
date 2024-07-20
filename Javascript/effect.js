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