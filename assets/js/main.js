var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper('.newsSwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
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