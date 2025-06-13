document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-button");

    accordions.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                document.querySelectorAll(".accordion-content").forEach(item => {
                    item.style.display = "none";
                });
                content.style.display = "block";
            }
        });
    });
});




const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');

        // Optional: Animate the hamburger icon
        hamburger.classList.toggle('active');
    });


// Only declare if not already declared
if (typeof window.navLinkHighlighterInitialized === 'undefined') {
  window.navLinkHighlighterInitialized = true;

  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (href === "index.html" && currentPath === "")) {
      link.classList.add("active");
    }
  });
}
