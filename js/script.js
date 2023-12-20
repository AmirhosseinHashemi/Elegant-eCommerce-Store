const menuBtn = document.querySelectorAll(".nav__btn");
const menu = document.querySelector(".nav__menu");
const menuList = document.querySelector(".nav__list");
const arrowes = document.querySelectorAll(".nav__arrow");

const carouselDots = document.querySelectorAll(".carousel__dot");
const carouselSlides = document.querySelectorAll(".carousel__slide");
const carouselContainer = document.querySelector(".carousel__slides");

const brandsList = document.querySelector(".brands__list");
const brandsLogo = document.querySelectorAll(".brands__logo");
const brandsBtn = document.querySelectorAll(".brands__arrowes button");
const brandsIcon = document.querySelectorAll(".brands__icon");

// Handle mobile menu
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

// Carousel
carouselDots.forEach((dot) => {
  dot.addEventListener("click", function (e) {
    const dataDot = e.target.dataset.carouselDot - 1;
    const slideWidth = carouselSlides[dataDot].clientWidth + 16; // element's width + gap
    const movment = dataDot * slideWidth;

    carouselContainer.style.transform = `translateX(-${movment}px)`;

    carouselDots.forEach((dot) => dot.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// Brands
brandsBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const clicked = e.target.closest("button");
    const translateValue = brandsList.scrollWidth - brandsList.clientWidth;

    brandsIcon.forEach((icon) => icon.classList.remove("active"));

    if (clicked.dataset.goTo === "start") {
      brandsList.style.transform = "translateX(0px)";
      brandsIcon[1].classList.add("active");
    }

    if (clicked.dataset.goTo === "end") {
      brandsList.style.transform = `translateX(-${translateValue}px)`;
      brandsIcon[0].classList.add("active");
    }
  });
});
