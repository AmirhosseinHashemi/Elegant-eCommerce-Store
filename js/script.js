const menuBtn = document.querySelectorAll(".nav__btn");
const menu = document.querySelector(".nav__menu");
const menuList = document.querySelector(".nav__list");
const arrowes = document.querySelectorAll(".nav__arrow");

menuBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    menu.classList.toggle("open");
  })
);

arrowes.forEach((icon) => {
  icon.addEventListener("click", function (e) {
    // click on an open drop down
    if (this.classList.contains("rotate")) {
      this.classList.remove("rotate");
      e.target
        .closest(".nav__item")
        .querySelector(".nav__drop-down")
        .classList.remove("open");
      return;
    }

    // click on a close drop down
    menuList
      .querySelectorAll(".nav__drop-down")
      .forEach((drop) => drop.classList.remove("open"));
    menuList
      .querySelectorAll(".nav__arrow")
      .forEach((arrow) => arrow.classList.remove("rotate"));

    e.target.classList.toggle("rotate");
    const list = e.target.closest(".nav__item");
    list.querySelector(".nav__drop-down").classList.toggle("open");
  });
});
