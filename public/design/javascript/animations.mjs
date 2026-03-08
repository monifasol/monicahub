
const loadAnimations = () => {

    // Create cross browser requestAnimationFrame method:
    window.requestAnimationFrame = window.requestAnimationFrame
                                    || window.mozRequestAnimationFrame
                                    || window.webkitRequestAnimationFrame
                                    || window.msRequestAnimationFrame
                                    || function(f){setTimeout(f, 1000/60)}

    let animatedElements = document.querySelectorAll('[data-block-to-animate]'),
        overTheFoldElements = document.querySelectorAll('.over-the-fold'),
        arrowUp = document.querySelector('.arrow-up'),
        headFacingRight = document.querySelector('.head-facing-right'),
        header = document.getElementsByTagName('header')[0],
        butterfly = document.querySelector('.butterfly'),
        body = document.body,
        lastScrollTop = 0,
        pointerX = 0, 
        pointerY = 0,
        intervalButterfly = null;

    const listSections = ['sectionHello',
                          'sectionDesign',
                          'sectionWeb',
                          'sectionUx',
                          'sectionWriting'];

    const scrolledHeight = () => window.pageYOffset || document.documentElement.scrollTop


    function elementInViewport(el) {
        let top = el.offsetTop;
        let left = el.offsetLeft;
        let width = el.offsetWidth;
        let height = el.offsetHeight;

        while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }

        return (
          top < (window.pageYOffset + window.innerHeight) &&
          left < (window.pageXOffset + window.innerWidth) &&
          (top + height) > window.pageYOffset &&
          (left + width) > window.pageXOffset
        );
    }

    const elementIsIn = (element) => window.innerHeight >= element.getBoundingClientRect().top + 100

    const elementIsInScrollUp = (element) => window.innerHeight >= element.getBoundingClientRect().top + 180

    const animateBlockElements = () => {

        animatedElements.forEach( (animatedElement) => {
            if (elementIsIn(animatedElement) === true)
                animatedElement.setAttribute('data-block-to-animate', 'true');
        })
    }

    const revertAnimateBlocks = () => {
        //this sets animations to initial state if scroll direction is UP

        animatedElements.forEach( (animatedElement) => {
            if (elementIsInScrollUp(animatedElement) === false)
              animatedElement.setAttribute('data-block-to-animate', 'false')
        })
    }

    const moveHeadPointer = () => {
      // Transform scrolledHeight into degrees

      // 1. calculate % of scrolled distance from the total
      //    Total possible distance to scroll (totalPossibleScroll)

      let percentageScrolled,
          rotationDegrees,
          totalPossibleScroll = body.scrollHeight;

      // totalPossibleScroll = 100%, scrolledHeight = x% ?
      percentageScrolled = scrolledHeight() * 100 / totalPossibleScroll

      // 2. Total degrees I could rotate are: 60 degrees
      //    percentageScrolled is for 100, what x is for 60
      rotationDegrees = percentageScrolled * 60 / 100
      headFacingRight.style.transform = "rotate("+ rotationDegrees + "deg)"
    }

    const arrowUpBehaviour = function (event) {

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

      // for old browsers
      // window.scrollTo(0,0)   // this, overwrite the previous behaviour! 
    };

    arrowUp.addEventListener('click', arrowUpBehaviour, false)
    arrowUp.addEventListener('touchstart', arrowUpBehaviour, false)

    const initArrowUp = () => {

      if (scrolledHeight() > 200) arrowUp.classList.add('visible')
      else arrowUp.classList.remove('visible')
    }

    const selectActiveMenuItem = () => {

      listSections.forEach( (sectionClassName) => {
          let elementsDom = document.querySelectorAll(`.${sectionClassName}`)

          // sometimes there are more than 1 element with the same class
          elementsDom.forEach( (element) => {
            let menuItem = document.querySelector(`[data-target="${sectionClassName}"]`)
            if (elementInViewport(element)) menuItem.classList.add('active')
            else menuItem.classList.remove('active')
          })
      }) 
    }
    
    // Set position of cursor as it moves
    document.onmousemove = function(event) {
        pointerY = event.pageY;     // top
        pointerX = event.pageX;     // left
    }

    // Butterfly follows user's cursor movement
    const moveButterfly = () => {

        clearInterval(intervalButterfly)

        // get butterfly's left position
        let leftPosButterfly = butterfly.style.left
        let numberPosButterfly = leftPosButterfly.slice(0, leftPosButterfly.indexOf('px'))

        // set butterfly's direction
        if (numberPosButterfly < pointerX) butterfly.classList.remove('goes-left')
        else butterfly.classList.add('goes-left')

        // set butterfly's position
        butterfly.style.top = `${pointerY - 60}px`
        butterfly.style.left = `${pointerX}px`

        // 2 sec is what the animation lasts --> so we apply delay of 1,5 seconds to avoid changing the direction too early!
        intervalButterfly = setInterval( () => {
          window.requestAnimationFrame(moveButterfly)
        }, 1500);   
    }

    // first time
    setTimeout( () => {
      window.requestAnimationFrame(moveButterfly)
    }, 2000)
    

    const animateTopPage = () => {

      if (scrolledHeight() > 0) {
        header.classList.add('scrolled')
        overTheFoldElements.forEach( (element) => { element.setAttribute('data-top-elements-animate', 'false') })
      } else {
        overTheFoldElements.forEach( (element) => { element.setAttribute('data-top-elements-animate', 'true') })
        header.classList.remove('scrolled')
      }
    }

    // first time, so that elements appear
    window.requestAnimationFrame(animateBlockElements);
    window.requestAnimationFrame(animateTopPage);


    // when scroll
    window.addEventListener('scroll', function () {
      window.requestAnimationFrame(animateTopPage);
      window.requestAnimationFrame(selectActiveMenuItem);
      window.requestAnimationFrame(moveHeadPointer);
      window.requestAnimationFrame(initArrowUp);

      if (scrolledHeight() < lastScrollTop) {
        window.requestAnimationFrame(revertAnimateBlocks)    // UP
      } else {
        window.requestAnimationFrame(animateBlockElements)   // DOWN
      }
      
      lastScrollTop = scrolledHeight() <= 0 ? 0 : scrolledHeight()     // For Mobile or negative scrolling

    }, false);

};

export { loadAnimations };