document.getElementById("testimonyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    
    if (name.trim() === "" || message.trim() === "") {
        alert("Please enter your name and testimony.");
        return;
    }

    let testimony = { name, message, date: new Date().toLocaleDateString() };

    // Save to LocalStorage
    let testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
    testimonies.unshift(testimony);
    localStorage.setItem("testimonies", JSON.stringify(testimonies));

    // Display on page
    displayTestimonies();

    // Clear form
    document.getElementById("testimonyForm").reset();
});

function displayTestimonies() {
    let testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
    let testimonyContainer = document.getElementById("testimonies");

    testimonyContainer.innerHTML = "";
    testimonies.forEach(t => {
        let div = document.createElement("div");
        div.innerHTML = `<strong>${t.name}</strong> (${t.date})<br>${t.message}<hr>`;
        testimonyContainer.appendChild(div);
    });
}

// Show existing testimonies on page load
displayTestimonies();