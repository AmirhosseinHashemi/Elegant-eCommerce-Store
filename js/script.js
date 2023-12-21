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

const day = document.querySelector(".off__time--days");
const hour = document.querySelector(".off__time--hours");
const minute = document.querySelector(".off__time--minutes");
const second = document.querySelector(".off__time--seconds");

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
    carouselSlides.forEach((s) => {
      s.style.transform = `translateX(-${dataDot * 100}%)`;
    });

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

// timer

const timer = function () {
  const now = new Date();
  const future = new Date("2024-01-01T00:00:00");
  const distance = (future.getTime() - now.getTime()) / 1000;

  const d = Math.floor(distance / (24 * 60 * 60));
  const h = Math.floor((distance % (24 * 60 * 60)) / (60 * 60));
  const m = Math.floor(((distance % (24 * 60 * 60)) % (60 * 60)) / 60);
  const s = Math.floor(((distance % (24 * 60 * 60)) % (60 * 60)) % 60);

  day.innerHTML = `${d}`.padStart(2, "0");
  hour.innerHTML = `${h}`.padStart(2, "0");
  minute.innerHTML = `${m}`.padStart(2, "0");
  second.innerHTML = `${s}`.padStart(2, "0");
};
setInterval(timer, 1000);
