const revealElements = document.querySelectorAll('.scroll-reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const scrollTop = window.scrollY;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top + scrollTop;

    if (scrollTop + windowHeight > elementTop + 60) {
      el.classList.add('show');
    }
  });
}

// Run on scroll and on load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
