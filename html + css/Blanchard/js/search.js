document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#search").addEventListener("click", function() {
    document.querySelector (".header__form-search").classList.add("header__form-search_open")
    document.querySelector (".header__form-btn").classList.add("header__form-btn-open")
    document.querySelector (".header__form-label").classList.add("header__form-label-active")
    document.querySelector (".header__form-btn-close").classList.add("header__form-btn-close-visible")
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#search__close").addEventListener("click", function() {
    document.querySelector (".header__form-search").classList.remove("header__form-search_open")
    document.querySelector (".header__form-btn").classList.remove("header__form-btn-open")
    document.querySelector (".header__form-label").classList.remove("header__form-label-active")
    document.querySelector (".header__form-btn-close").classList.remove("header__form-btn-close-visible")
  });
});

