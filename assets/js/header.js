// JavaScript Document

const MenuContainer = document.querySelector('.menu_container');
const headernav = document.querySelector('.header-nav');
const MenuClose = document.querySelector('.menu_close');
const MenuOpen = document.querySelector('.menu_open');

MenuContainer.addEventListener('click', () => {
  headernav.classList.toggle('active');
  MenuClose.classList.toggle('active');
  MenuOpen.classList.toggle('active');

});
