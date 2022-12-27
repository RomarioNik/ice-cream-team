import Swiper from './swiper-bundle.min';

new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 100,
  loop: true,
  lazy: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.disolve', {
  lazy: true,
  speed: 3000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
});
