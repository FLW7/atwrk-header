$(document).ready(function () {
  // Header autohide
  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.querySelector('.heads-wrapper');
  var checkScroll = function () {

    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 52) {

      //replace 52 with the height of your header in px

      header.classList.add('scroll-header-fix');
      $('.work__summary .summary__content-right .filter').addClass('scroll-header-fix')
      $('.menu_mob').addClass('hide_menu')
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove('scroll-header-fix');
      $('.work__summary .summary__content-right .filter').removeClass('scroll-header-fix')
      $('.menu_mob').removeClass('hide_menu')
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);
})