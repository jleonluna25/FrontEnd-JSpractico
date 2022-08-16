const navbarMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenu.classList.remove("activo");

navbarMenu.addEventListener("click", toggleDesktopMenu);
hamburguerMenu.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("activo");
}