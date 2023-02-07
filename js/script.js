let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let body = document.body;

burger.addEventListener('click', function(){
  burger.classList.toggle('burger_active');
  menu.classList.toggle('menu_active');
  body.classList.toggle('freeze');
})

new Swiper('.hero__categories', {
  simulateTouth: true,
  grabCursor: true,
  keyboard: {           // управління клавиатурою
    enabled: true,      // вкл/викл
    onlyInViewport: true, // тільки в межах в'юпорта
    pageUpDown: false,   // клавішами pageUp, pageDown
  },
  spaceBetween: 30,
})

new Swiper('.hero__footer', {
  simulateTouth: false,
  grabCursor: false,
  keyboard: {           // управління клавиатурою
    enabled: false,      // вкл/викл
    onlyInViewport: true, // тільки в межах в'юпорта
    pageUpDown: false,   // клавішами pageUp, pageDown
  },
  spaceBetween: 148,
  slidesPerView:'auto',
  loop: true,
  autoplay: {           // автопрокрутка
    delay: 1000,        // затримка
    stopOnLastSlide: false,  // стоп на останньому
    disableOnInteraction: false,  // викл після ручного перемикання
  },
});