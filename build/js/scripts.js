// Custom Scripts
// Custom scripts
function dateInputs() {
  // Получаем все элементы с атрибутом data-date-input
  const dateInputs = document.querySelectorAll('[data-mask-input]');

  if (!dateInputs) {
    return null
  }

  // Проходимся по каждому элементу и создаем для него экземпляр IMask
  dateInputs.forEach(dateInput => {
    IMask(dateInput, {
      mask: "+{7}(000)000-00-00",
    });
  });

}
dateInputs();

function consultationSlider() {
  const container = document.querySelector('.consultation');

  if (!container) {
    return null
  }

  const swiper = new Swiper(".consultation__slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },

    navigation: {
      nextEl: ".consultation__slider-arrow--next",
      prevEl: ".consultation__slider-arrow--prev",
    },
  });

}

consultationSlider();

function benifitsSlider() {
  const container = document.querySelector('.benifits');

  if (!container) {
    return null
  }

  const swiper = new Swiper(".benifits__slider", {
    slidesPerView: 1.5,

    navigation: {
      nextEl: ".benifits__slider-arrow--next",
      prevEl: ".benifits__slider-arrow--prev",
    },

    // Responsive breakpoints
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      // when window width is >= 480px
      768: {
        slidesPerView: 4,
        spaceBetween: 30
      },

      800: {
        slidesPerView: 6,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1025: {
        slidesPerView: 7,
        spaceBetween: 40
      }
    }
  });

}

benifitsSlider();
