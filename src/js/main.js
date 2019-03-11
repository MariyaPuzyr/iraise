/* body animation */



particlesJS("particles-js", {
  "particles": {
    "number": {"value": 400, "density": {"enable": true, "value_area": 800}},
    "color": {"value": ["#ff6000", "#972279"]},
    "shape": {
      "type": "circle",
      "stroke": {"width": 0, "color": "#fff5f5"},
      "polygon": {"nb_sides": 5},
      "image": {"src": "img/github.svg", "width": 100, "height": 100}
    },
    "opacity": {"value": 0.5, "random": true, "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}},
    "size": {"value": 10, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
    "line_linked": {"enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2},
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "top-left",
      "random": true,
      "straight": true,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {"enable": true, "rotateX": 10000, "rotateY": 10000}
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {"enable": false, "mode": "grab"},
      "onclick": {"enable": true, "mode": "push"},
      "resize": true
    },
    "modes": {
      "grab": {"distance": 280.1666382439641, "line_linked": {"opacity": 0.24678561733422155}},
      "bubble": {"distance": 609.0579092260089, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3},
      "repulse": {"distance": 200, "duration": 0.4},
      "push": {"particles_nb": 4},
      "remove": {"particles_nb": 2}
    }
  },
  "retina_detect": true
});
var count_particles, update;
count_particles = document.querySelector('.js-count-particles');
update = function () {
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

/* body animation end */

$('.mouse').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 220
      }, 1000);
      return false;
    }
  }
});

/* carousel */

if ($(window).width() > 768) {
  let Carousel = function Carousel() {
    const increment = 80;
    let totalImages;
    let $images;
    let $carousel;
    let carouselWidth;

    let on = function () {
      $carousel = $('.carousel__container');
      $images = $('.carousel__item');
      carouselWidth = $carousel.width();
      totalImages = $images.length;
      position();
    }

    let position = function () {
      let number;
      let currentImage = $('.carousel__container--active').index();
      let x = 0;
      let z = 0;
      let zindex;
      let scaleX = 1;
      let scaleY = 1;
      let transformOrigin;

      $images.each(function (index, element) {
        scaleX = scaleY = 0.9;
        transformOrigin = carouselWidth / 2;
        if (index < currentImage) {
          number = 1;
          zindex = index + 1;
          x = carouselWidth / 2 - increment * (currentImage - index + 1);
          z = -increment * (currentImage - index + 1);
        } else if (index > currentImage) {
          number = -1
          zindex = totalImages - index;
          x = carouselWidth / 2 + increment * (index - currentImage + 1);
          z = -increment * (index - currentImage + 1);
        } else {
          number = 0;
          zindex = totalImages;
          x = carouselWidth / 2;
          z = 1;
          scaleX = scaleY = 1;
          transformOrigin = 'initial';
        }
        $(element).css(
            {
              'transform': 'translate3d(' + calculateX(x, number, 780) + 'px, 0,' + z + 'px) scale3d(' + scaleX + ',' + scaleY + ', 1)',
              'z-index': zindex,
              'transform-origin-x': transformOrigin
            }
        );
      });
    };

    let calculateX = function (position, number, width) {
      switch (number) {
        case 1:
        case 0:
          return position - width / 2;
        case -1:
          return position - width / 2;
      }
    }

    let imageSize = function () {
      return $carousel.width() / 3;
    }

    let recalculateSizes = function () {
      carouselWidth = $carousel.width();
      position();
    }

    let clickedImage = function () {
      let activeImage = $(this);
      let activeImageNumber = $(this).index();

      $('.carousel__container--active').removeClass('carousel__container--active');
      activeImage.addClass('carousel__container--active');
      position();
    }

    let clickedDot = function () {
      let target = $(this).index();

      $('.carousel__item[data-target=' + target + ']').click();
    }

    let prevNext = function () {
      let getClass = $(this).attr('class');

      if (getClass === 'carousel__arrow carousel__arrow--right') {
        $('.carousel__container--active').next().click();
      } else {
        $('.carousel__container--active').prev().click();
      }
    }

    let addEvents = function () {
      $(window).resize(recalculateSizes);
      $(document).on('click', '.carousel__item', clickedImage);
      $(document).on('click', 'li', clickedDot);
      $(document).on('click', '.carousel__arrow', prevNext);
    }

    return {
      init: function () {
        on();
        addEvents();
      }
    };
  }();

  $(function () {
    const carousel = Carousel.init();
  })
};
/* end carousel */

/* slick slider */
if ($(window).width() < 768) {
  $('.responsive').slick({
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
};


/* init WOW */
new WOW().init();