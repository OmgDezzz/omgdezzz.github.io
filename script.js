document.addEventListener("DOMContentLoaded", function () {
    particlesJS.load("particles-js", "particles.json", function () {
        console.log("Particles.js loaded successfully.");
    });

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.2s ease-in-out";
        });
        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "rgba(20, 20, 20, 0.9)";
            header.style.backdropFilter = "blur(10px)";
        } else {
            header.style.background = "transparent";
        }
    });
});
