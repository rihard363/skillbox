var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");

im.mask(selector);

new JustValidate(".js-form", {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: {
      required: "Введите ваше имя",
      minLength: "Слишком коротокое имя",
    },
    email: "Email не введён или введён не верно",
    tel: "Телефон не введён или введён не верно",
  },
});
