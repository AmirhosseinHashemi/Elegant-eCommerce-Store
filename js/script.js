const menuBtn = document.querySelector(".nav__btn");
const menu = document.querySelector(".nav__menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
  menuBtn.classList.toggle("close");
});
