import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// const scrollCounter = document.querySelector('.js-scroll-counter');

// window.addEventListener('scroll', function () {
//   scrollCounter.innerHTML = window.pageYOffset;
// });

AOS.init({
  startEvent: 'DOMContentLoaded',
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true,
});

//   (document.onreadystatechange = () => {
//     if (document.readyState == 'complete') {
//       AOS.init({
//         startEvent: 'DOMContentLoaded',
//         offset: 200,
//         duration: 800,
//         easing: 'ease-in-out-sine',
//         delay: 200,
//         mirror: true,
//       });
//     }
//   });
