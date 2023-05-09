const searchElement = document.querySelector(".search");
const searchInput = searchElement.querySelector("input");

searchElement.addEventListener("click", () => {
  searchInput.focus();
});

searchInput.addEventListener("focus", () => {
  searchElement.classList.add("focused");
  searchInput.setAttribute("placeholder", "통합검색");
});

searchInput.addEventListener("blur", () => {
  searchElement.classList.remove("focused");
  searchInput.removeAttribute("placeholder");
});

const badgeElement = document.querySelector("header .badges");

const toTopElement = document.querySelector("#to-top");
toTopElement.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: 0
  })
})

window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      gsap.to(badgeElement, 0.6, {
        opacity: 0,
        display: "none",
      });
      gsap.to(toTopElement, 0.2, {
        x: 0
      })

    } else {
      gsap.to(badgeElement, 0.6, {
        opacity: 1,
        display: "block",
      });
      gsap.to(toTopElement, 0.2, {
        x: 100
      });
    }
  }, 300)
);



const fadeElements = document.querySelectorAll(".visual .fade-in");
fadeElements.forEach((element, idx) => {
  gsap.to(element, 1, {
    delay: (idx + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  direction: "horizontal",
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionElement = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionElement.classList.add("hide");
  } else {
    promotionElement.classList.remove("hide");
  }
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay,
  });
}

floatingObject(".floating", 1, 15);
floatingObject(".floating", 0.5, 15);
floatingObject(".floating", 1.5, 20);

const spyels = document.querySelectorAll("section.scroll-spy");
spyels.forEach((spyel) => {
  new ScrollMagic.Scene({
    triggerElement: spyel,
    triggerHook: 0.8
  })
    .setClassToggle(spyel, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();