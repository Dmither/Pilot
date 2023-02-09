let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let body = document.body;

burger.addEventListener('click', function(){
  burger.classList.toggle('burger_active');
  menu.classList.toggle('menu_active');
  body.classList.toggle('freeze');
})


// hero sliders -----------------------------------------------------

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
  spaceBetween: (body.offsetWidth / 1200 * 148),
  slidesPerView:'auto',
  loop: true,
  autoplay: {           // автопрокрутка
    delay: 1000,        // затримка
    stopOnLastSlide: false,  // стоп на останньому
    disableOnInteraction: false,  // викл після ручного перемикання
  },
});


// rate -------------------------------------------------------------

let markArray = [1067, 211, 39, 21, 68];

let marks = document.querySelectorAll('.stars__mark>span');
let counts = document.querySelectorAll('.stars__count>span');
let lines = document.querySelectorAll('.stars__line>span');
let percents = document.querySelectorAll('.stars__line>div');

let generalMark = document.querySelector('.rate__mark');
let generalReviews = document.querySelector('.rate__reviews')

window.addEventListener('load', function(){
  let points = 0;
  let reviews = 0;
  for (let i = 0; i < marks.length; i++){
    // culc points and reviews
    counts[i].textContent = new Intl.NumberFormat('en-IN').format(markArray[i]);
    points += (Number(marks[i].textContent) * markArray[i]);
    reviews += Number(markArray[i]);
    
  }
  for (let i = 0; i < marks.length; i++){
    // set line width and persents
    lines[i].style.width = String(Number(markArray[i]) / reviews * 100) + '%'
    percents[i].textContent = String((markArray[i] / reviews * 100).toFixed(0)) + '%'
  }
  // set general mark and total reviews count
  generalMark.textContent = (points / reviews).toFixed(1)
  generalReviews.textContent = (new Intl.NumberFormat('en-IN').format(reviews));
})


// stiories slider ---------------------------------------------------

new Swiper('.stories__reviews', {
  navigation: {
    nextEl: '.stories__right',
    prevEl: '.stories__left',
  },
  keyboard: {           // управління клавиатурою
    enabled: true,      // вкл/викл
    onlyInViewport: true, // тільки в межах в'юпорта
    pageUpDown: false,   // клавішами pageUp, pageDown
  },
  simulateTouth: false,
  autoHeight: true,
  slidesPerView: 'auto',
  watchOverflow: true,
  spaceBetween: 23,
})