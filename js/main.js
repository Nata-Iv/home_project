const navLinks = document.querySelectorAll(".menu__link");

navLinks.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(event) {
  event.preventDefault();
  const target = event.currentTarget;

  navLinks.forEach(function (link) {
    link.classList.remove("page__active");
  });

  target.classList.add("page__active");
}

// navLinks.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     event.preventDefault();
//     document.querySelector(".page__active")?.classList.remove("page__active");
//     element.classList.add("page__active");
//   });
// });

// navLinks.forEach(function (link) {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();

//     navLinks.forEach(function (item) {
//       item.classList.remove("page__active");
//     });

//     this.classList.add("page__active");
//   });
// });

const mySwiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function updateSlideNumber() {
  const currentSlideIndex = mySwiper.realIndex + 1;
  const currentSlideNumber = currentSlideIndex.toString().padStart(2, "0");
  document.getElementById("number-of-slide").innerText = currentSlideNumber;
}

function updateTotalSlides() {
  const totalSlides = mySwiper.slides.length.toString().padStart(2, "0");
  document.getElementById("swiper-total-slides").innerText = " " + totalSlides;
}

updateSlideNumber();
updateTotalSlides();

mySwiper.on("slideChange", function () {
  updateSlideNumber();
});

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".burger-menu");

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
}
