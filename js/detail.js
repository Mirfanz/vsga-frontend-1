const swiper1 = new Swiper(".swiper-detail", {
  spaceBetween: 10,
  pagination: {
    el: ".custom-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slide-next",
    prevEl: ".slide-prev",
  },
});
const btnLove = document.querySelector("#btnLove input");
btnLove.onchange = function () {
  if (this.checked) return this.parentElement.classList.add("active");
  this.parentElement.classList.remove("active");
};
