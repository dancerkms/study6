'use strict';

const burgerMenu = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const headerLogo = document.querySelector('.header__logo');
const chooseColorButtons = document.querySelectorAll('.choose-color__btn');
const header = document.querySelector('.header');

// Подключаем обработчик события на кнопки выбора цвета
chooseColorButtons.forEach(function (element) {
  element.addEventListener('click', eventChangeColor);
});

// Обрабочк события нажатия на ккнопку смены цвета
function eventChangeColor(event) {
  const curColor = event.currentTarget.getAttribute("data-color");
  modifElementByColor('choose-color__btn', curColor);
  modifElementByColor('header__image', curColor);
  modifElementByColor('composition__img', curColor);
  modifElementByColor('battery__img', curColor);
  changeColorClassToHeader(curColor);
}

function changeColorClassToHeader(newColor) {
  // В списке классов заголовка ищем класс начинающийся на "color--" и заменям его на новый
  let curColor = "";
  for (let el of header.classList) {
    if (el.includes('color--')) {
      curColor = el;
      break;
    }
  }
  header.classList.remove(curColor);
  header.classList.add(newColor);
}

function modifElementByColor(mainClass, activeColor) {
  let findedElement;
  // Для элемента данного класса с признаком активности, активность снимаем
  findedElement = document.querySelector(`.${mainClass}.color--active`);
  if (findedElement) {
    findedElement.classList.remove('color--active');
  }
  // Для элемента с необходимым модификатором цветом, устанавливаем активность
  findedElement = document.querySelector(`.${mainClass}.${activeColor}`);
  if (findedElement) {
    findedElement.classList.add('color--active');
  }
}


burgerMenu.addEventListener('click', function () {
  burgerMenu.classList.toggle('burger--open');
  menu.classList.toggle('menu--opened');
  headerLogo.classList.toggle('logo--white');
})




