const mob_nav = document.querySelector(".mob-navbar-btn")
const nav_header = document.querySelector("#header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mob_nav.addEventListener("click", () => toggleNavbar());