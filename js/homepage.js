// hero section javascript

const mainSwiper = new Swiper(".mainSwiper", {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: new Swiper(".thumbSwiper", {
      spaceBetween: 10,
      slidesPerView: 2,
      freeMode: true,
      watchSlidesProgress: true,
      loop: true,
    }),
  },
});

// marquee section javascript

const marquee = document.querySelector('.marquee-content');
  marquee.innerHTML += marquee.innerHTML;

// host university section javascript

const track = document.getElementById("hostSliderTrack");
const slides = track.querySelectorAll("img");
const totalSlides = slides.length;

let currentIndex = 0;

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(moveToNextSlide, 2100); // 1.5s pause + 0.6s transition

