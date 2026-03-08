const initNavigation = () => {

    let navigationLinks = document.querySelectorAll('[data-target]');

    if (navigationLinks) {

      const navigationLinksBehaviour = (e, element) => {
        e.preventDefault();

        let targetElement = document.getElementById(element.dataset.target);

        window.scrollBy({
          top: targetElement.getBoundingClientRect().top - 140,
          left: 0,
          behavior: 'smooth'
        });
      };

      navigationLinks.forEach( (link) => {

        link.addEventListener('click', (e) => { 
          navigationLinksBehaviour(e, link)
        })

        link.addEventListener('touchstart', (e) => {
          navigationLinksBehaviour(e, link)
        })
      })
    }
};

export { initNavigation };