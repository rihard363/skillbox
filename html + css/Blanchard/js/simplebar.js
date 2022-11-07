//new SimpleBar(document.querySelector(".simplebar"), {
  /* чтобы изначально ползунок был виден */
//  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
//  scrollbarMaxSize: 28,
//});

document.querySelectorAll(".simplebar").forEach(item => {
  new SimpleBar(item, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 28,

 });
})
