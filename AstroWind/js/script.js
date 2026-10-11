const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-white/10", "backdrop-blur-lg", "shadow-lg", "border-b", "border-white/10");
        } else {
            navbar.classList.remove("bg-white/10", "backdrop-blur-lg", "shadow-lg", "border-b", "border-white/10");
        }
    });