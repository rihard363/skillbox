window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("#menu").classList.toggle("is-active");
    document
      .querySelector("#burger")
      .classList.toggle("header__burger-default");
    document.querySelector("#burger").classList.toggle("header__burger-active");
  });
});
