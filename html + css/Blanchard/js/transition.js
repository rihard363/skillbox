document.addEventListener("DOMContentLoaded", function() {
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
})
})

document.addEventListener("DOMContentLoaded", function() {
  $("#mini-menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
})
})


document.addEventListener("DOMContentLoaded", function() {
  $("#btm").on("click","button", function (event) {
    event.preventDefault();
    var id  = $(this).attr('data-path'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
})
})


document.addEventListener("DOMContentLoaded", function() {
  $("#link_accordeon").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
})
})


