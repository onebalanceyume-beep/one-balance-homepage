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

// メニューの項目をタップしたら、メニューを閉じる（開いたままだとページの文字を隠してしまうため）
document.querySelectorAll('.header-nav a').forEach((a) => {
  a.addEventListener('click', () => {
    headernav.classList.remove('active');
    MenuClose.classList.remove('active');
    MenuOpen.classList.remove('active');
  });
});
