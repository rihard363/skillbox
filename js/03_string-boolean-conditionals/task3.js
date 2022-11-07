//Проверка надёжности пароля

let password = '123456789';

if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
  console.log ('Пароль надёжный');
} else {
  console.log ('Пароль недостаточно надёжный');
}


//Преобразовании строки в верхний и нижний регистр

let name = 'АлекСандр';
let surname = 'ПуШкин';

let firstLetterName = name.substr(0, 1);
let otherLettersName = name.substr(1);

let correctedName = firstLetterName.toUpperCase() + otherLettersName.toLowerCase();


let firstLetterSurname = surname.substr(0, 1);
let otherLettersSurname = surname.substr(1);

let correctedSurname = firstLetterSurname.toUpperCase() + otherLettersSurname.toLowerCase();
console.log(correctedName + ' ' + correctedSurname);

name === correctedName && surname === correctedSurname ?
  console.log ('Имя осталось без изменений') :  console.log ('Имя было преобразовано');


  /* Если для имени и фамилии необходимо было сделать разные условия то код был бы вида:
    name === correctedName ? console.log ('Имя осталось без изменений') : console.log ('Имя было преобразовано');
    surname === correctedSurname ? console.log ('Фамилия осталась без изменений') : console.log ('Фамилия была преобразована');
  */
