document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".catalog__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path;
     document.querySelectorAll(".catalog__content-left").forEach(function (tabContent) {
      tabContent.classList.remove("catalog__content-left-active");
       console.log(tabContent);
      });
     document.querySelector(`[data-target="${path}"]`).classList.add("catalog__content-left-active");
    });
  });
});
