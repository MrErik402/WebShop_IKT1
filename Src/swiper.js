document.querySelector("#carousel").addEventListener("mouseover", function () {
  swiper.autoplay.stop();
});

document.querySelector("#carousel").addEventListener("mouseout", function () {
  swiper.autoplay.start();
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 1,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
  },
});
