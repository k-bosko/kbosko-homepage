document.addEventListener("DOMContentLoaded", () => {
  const _typed = new Typed(".typed", {
    strings: ["Data Engineer.", "Lifelong Learner.", "Explorer."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 70,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () { },
    // starting callback function before each string
    preStringTyped: function () { },
    //callback for every typed string
    onStringTyped: function () { },
    // callback for reset
    resetCallback: function () { },
  });

  /**
     * Back to top button - Vanilla JavaScript
     */
  let backtotop = document.querySelector('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    document.onscroll = toggleBacktotop
  }

  /**
   * Porfolio isotope and filter
   */
  const portfolioContainer = document.querySelector('.portfolio-container');
  if (portfolioContainer) {
    const portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item'
    });

    const allPortfolioFilters = document.querySelectorAll('.portfolio-filters li')
    allPortfolioFilters.forEach((el) => {
      el.onclick = (event) => {
        event.preventDefault();

        allPortfolioFilters.forEach((el) => {
          el.classList.remove('filter-active');
        });

        event.target.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: event.target.getAttribute('data-filter')
        });

        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }
    });
  }

  /**
     * Initiate portfolio details lightbox
     */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '70vh',
  });
});
