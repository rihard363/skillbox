//Создадим класс карт в который и поместим основной код и экспортируеем его
export default class Card {
//создаём свойства с состоянием карточки
_open = false
_success = false

  constructor(container, number, active) {
    //создаём блок с классом card и задаём текст внутри блока
  this.card = document.createElement('div');
  this.card.classList.add('card');
  this.card.textContent = number;
    //довим возможность обращения по номеру
  this.number = number;

//создаём соытие по клику на карточку
  this.card.addEventListener('click', () => {
    if (this.open == false && this.success == false) {
      this.open = true;
      active(this);
    }
  })
//а теперь добавляем этот блок в блок с id game
  container.append(this.card);
  }

  set open(value) {
    this._open = value
    value ? this.card.classList.add('open') : this.card.classList.remove('open')
  }
  get open(){
    return this._open
  }
  set success(value) {
    this._success = value
    value ? this.card.classList.add('success') : this.card.classList.remove('success')
  }
  get success(){
    return this._success
  }
}


function flip (card) {
  console.log(card);
};

function done(card) {
  card.classList.add('success');
};


