const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".header-nav");
const overlay = document.querySelector(".overlay");
const menuLinks = document.querySelectorAll(".header-link");

function closeMenu() {
  menu.classList.remove("is-open");
  overlay.classList.remove("is-open");
}

menuButton.addEventListener("click", function () {
  menu.classList.toggle("is-open");
  overlay.classList.toggle("is-open");
});

overlay.addEventListener("click", closeMenu);

menuLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});