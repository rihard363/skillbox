document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".hero-menu-btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".hero-menu__dropdown");

    document.querySelectorAll(".hero-menu-btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });

    document.querySelectorAll(".hero-menu__dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-hero-menu-item");
      }
    })
    dropdown.classList.toggle("active-hero-menu-item");
    btn.classList.toggle("active--btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".hero-menu-list")) {
    document.querySelectorAll(".hero-menu__dropdown").forEach(el => {
        el.classList.remove("active-hero-menu-item");
    })
     document.querySelectorAll(".hero-menu-btn").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
})
})
