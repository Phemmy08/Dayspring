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