const slider = document.querySelector('.swiper');
const slider1 = document.querySelector('.swiper1');
const slider2 = document.querySelector('.swiper2');


let mySwiper = new Swiper(slider, {
  // Optional parameters
  direction: 'horizontal',
  loop: false,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    height: 0,
  },

  // And if we need scrollbar
 // scrollbar: {
 //   el: '.swiper-scrollbar',
 //},

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,

  breakpoints: {
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    1024:  {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
    },

    768:  {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
    },
  }
});

let mySwiper1 = new Swiper(slider1, {
  // Optional parameters
  direction: 'horizontal',
  loop: false,


    // If we need pagination
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
      type: 'bullets',
    },


  // And if we need scrollbar
 // scrollbar: {
 //   el: '.swiper-scrollbar',
 //},

 breakpoints: {
  1920: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 55,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next1',
      prevEl: '.swiper-prev1',
    },
  },

  1024:  {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 27,
  },

  768:  {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 34,
  }
}
});

let mySwiper2 = new Swiper(slider2, {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // And if we need scrollbar
 // scrollbar: {
 //   el: '.swiper-scrollbar',
 //},

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next2',
    prevEl: '.swiper-prev2',
  },

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,

  breakpoints: {
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    1024:  {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    768:  {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    }

  }
});

