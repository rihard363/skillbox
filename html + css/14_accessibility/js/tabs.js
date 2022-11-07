document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;
      document
        .querySelectorAll(".work__contaner__content")
        .forEach(function (tabContent) {
          tabContent.classList.remove("work__contaner__content-active");
          console.log(tabContent);
        });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("work__contaner__content-active");
    });
  });
});
