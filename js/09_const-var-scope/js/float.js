//импортируем карты
import Card from './card.js';


//напишем функцию для создания новой игры
function newGame(container, cardsCount) {

  //создаём поле
  let cardsNumberArr = []; // создаём пустой массив с номерами карт
  let cardsArr = []; //Добавим массив карточек
  //создаём переменную в которую будем помещать сведенья о карте на которую нажали первой first и второй second
  let firstCard = null; //то есть пустая
  let secondCard = null; // тоже пустую

  //заполним массив
for (let i = 1; i <= cardsCount / 2; i++) {
  cardsNumberArr.push(i);
  cardsNumberArr.push(i);
};
//перемешаем массив
cardsNumberArr = cardsNumberArr.sort(() => Math.random() - 0.5);

//заполняем поле карточками

for (const cardNumber of cardsNumberArr) {
  cardsArr.push(new Card(container, cardNumber, flip));
}


//механика игры

//функция которая заполнит сведенья о картах на которые нажали
function flip(card) {

  //условие которое закрывает карты, если номера не совпали
  if (firstCard !== null && secondCard !== null) {
    if (firstCard.number != secondCard.number) {
      firstCard.open = false;
      secondCard.open = false;
      firstCard = null;
      secondCard = null;
    };
  };
  //проверяем если карточка равна пустой то присваем значение
  if (firstCard == null) {
    firstCard = card
  } else {
    if (secondCard == null) {
      secondCard = card
    };
  };

  //провека на совпадение номера в карточках, если совпали то добавляем нужный класс
  if (firstCard !== null && secondCard !== null) {
    if (firstCard.number == secondCard.number) {
      firstCard.success = true;
      secondCard.success = true;
      firstCard = null;
      secondCard = null;
    };
  };

  //делаем сброс игры
  if(document.querySelectorAll('.card.success').length == cardsNumberArr.length) {
    alert('Победа!')
    container.innerHTML = ''
    cardsNumberArr = [];
    cardsArr = [];
    firstCard = null;
    secondCard = null;
    //начинаем игру заново
    newGame(container, cardsCount);
  }
}




};

newGame(document.getElementById('game'), 6);

