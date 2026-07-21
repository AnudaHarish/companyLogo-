var testimonialSwiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".mySwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiper .swiper-button-next",
    prevEl: ".mySwiper .swiper-button-prev",
  },
});

var swiper = new Swiper('.newsSwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.newsSwiper .swiper-pagination',
          clickable: true,
        },
});
  


document.querySelectorAll(".card-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const cardBody = e.target.closest(".card");
    const paragraph = cardBody.querySelector("p");

    paragraph.classList.toggle("expand");
    console.log(paragraph)
  });
});