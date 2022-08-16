const navbarMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
navbarMenu.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}