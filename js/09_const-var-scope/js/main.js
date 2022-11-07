//Добавляем защиту нашего window, чтобы наш код не влиял на глобальный объект
(() =>{

  const WAILT_TIME_MS = 60000;
  let buttonEndGame = document.createElement('button');
  buttonEndGame.textContent = "Сыграть ещё раз";
  buttonEndGame.id = 'buttonEndGame'
    document.addEventListener('DOMContentLoaded', () => {

    function endGame (buttonEnd){
      document.getElementById('game').innerHTML = '';
      cardsNumberArr = [];
      cardsArr = [];
      document.getElementById('float').append(buttonEnd);
      buttonEnd.addEventListener('click', () =>{
      document.getElementById('buttonEndGame').remove('buttonEndGame');
        startGame();
      });
    };

    function startGame(){
      //создаём форму для ввода числа

      // создаём поле для ввода карточек пользователем
      let form = document.createElement('form');
      let input = document.createElement('input');
      let button = document.createElement('button');

      form.id = 'form';
      input.classList.add('inputGame');
      input.placeholder = "Введите чётное число от 2 до 10";
      button.textContent = 'Начать игру';
      //деакутивируем кнопку
      button.disabled = true;
      //добавляем в форму инпут и баттон
      form.append(input);
      form.append(button);

      document.getElementById('float').append(form);
      //Проверяем поле на заполнение и верное заполнение
      input.addEventListener('input', () => {
        //if ((input.value !== "") && (input.value < 10) && (input.value % 2 == 0) && (input.value > 2)) {
          //button.disabled = false;
        //};
        if (input.value !== "") {
          button.disabled = false;
        };
      });
      form.addEventListener('submit', function(e) {
        //эта строчка необходима. чтобы предотвратить стандартное действие браузера
        //в данном случае мы не хотим, чтобы страница перезагружалась  при отправке формы
        e.preventDefault();

        //игнорируем создание элемента, если пользователь ничего не ввёл в поле
        if (!input.value) {
          return;
        };

        let count = input.value;
        let cardsCount = Math.pow(count,2);

        if ((input.value > 10) || (input.value < 2) || (input.value % 2 !== 0)){
          cardsCount = 4;
        };

        //создаём поле карточек
        function newGame (cardsCount) {
          let cardsNumberArr = []; // создаём пустой массив с номерами карт
          let cardsArr = []; //Добавим массив карточек
          let cardsOpen = []; //Массив открытых карточек

          //заполним массив
          for (let i = 1; i <= cardsCount / 2; i++) {
            cardsNumberArr.push(i);
            cardsNumberArr.push(i);
          };
          //перетасуем массив
          function shuffle(arr){
            let j, temp;
            for(let i = arr.length - 1; i > 0; i--){
              j = Math.floor(Math.random()*(i + 1));
              temp = arr[j];
              arr[j] = arr[i];
              arr[i] = temp;
            };
            return arr;
          };
          cardsNumberArr = shuffle (cardsNumberArr);

          //заполняем массив карточек
          for (let i =0; i<cardsNumberArr.length; i++) {
            let card = document.createElement('div');
            card.classList.add('card');
            card.textContent = cardsNumberArr[i];
            document.getElementById('game').append(card);
            cardsArr.push(card)
            //создаём событие по клику на карточку
            card.addEventListener('click', () => {
              if (card.classList == 'card'){
                card.classList.add('open')
                cardsOpen.push(card);
              };
              if(cardsOpen.length == 2 && cardsOpen[0].textContent == cardsOpen[1].textContent){
                cardsOpen[0].classList.add('success');
                cardsOpen[1].classList.add('success');

                cardsOpen = [];
              };
              if(cardsOpen.length == 3 && cardsOpen[0].textContent !== cardsOpen[1].textContent){
                setTimeout(() => {
                cardsOpen[0].classList.remove('open');
                cardsOpen[1].classList.remove('open');
                let x;
                x = cardsOpen[2];
                cardsOpen = [];
                cardsOpen[0] = x;
                }, 100);
              };
              if (document.querySelectorAll('.card.success').length == cardsArr.length) {
                setTimeout(() => {
                  alert('С победой!')
                endGame(buttonEndGame);
                }, 300);
              };
            });
          };
          document.getElementById('form').remove('form');
          setTimeout(() => {
            alert('Ничего не вышло. может повезёт в другой раз!')
            endGame(buttonEndGame);
          }, WAILT_TIME_MS);
        };
        newGame(cardsCount);
      });
    };
    startGame();
  });

})();
