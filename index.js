let iconMenu = document.querySelector(".menu__icon-show");
let iconClose = document.querySelector(".menu__icon-close");

let menuBack = document.querySelector(".menu__back");
let backgroundMenu = document.querySelector(".background__menu");
let menubar = document.querySelector(".menubar");
function showMenu(){
  menuBack.classList.remove("menu__show");
  backgroundMenu.classList.remove("background__show");
  menubar.classList.remove("menubarhidden");
}
function hiddenMenu(){
  menuBack.classList.add("menu__show");
  backgroundMenu.classList.add("background__show");
  menubar.classList.add("menubarhidden");
}

iconMenu.addEventListener("click", showMenu);
iconClose.addEventListener("click", hiddenMenu);
backgroundMenu.addEventListener("click", hiddenMenu);

