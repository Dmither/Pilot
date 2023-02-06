let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let body = document.body;

burger.addEventListener('click', function(){
  burger.classList.toggle('burger_active');
  menu.classList.toggle('menu_active');
  body.classList.toggle('freeze');
})