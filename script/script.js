// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  menu.addEventListener("click", (event) => {
    if (event.target) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)












// SWIPER

const swiperResult = new Swiper('.result__swiper', {

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  initialSlide: 4,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 20,
  // loop: true,

  breakpoints: {
    1450: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    }
  }
});











// MAGNIFIC

$(document).ready(function() {
  // Инициализируем Magnific Popup
  $('.popup-link').magnificPopup({
    type: 'inline',
    closeMarkup: '<button title="%title%" class="mfp-close">×</button>'
  });

  // Функция для открытия модального окна 1
  $('.modal__btn').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal1'
      },
      type: 'inline'
    });
  });

});


