(function($) {
  "use strict";

  var nav_offset_top = $("header").height() + 50;
  /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

  //* Navbar Fixed
  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area").addClass("navbar_fixed");
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  // Search Toggle
  $("#search_input_box").hide();
  $("#search").on("click", function() {
    $("#search_input_box").slideToggle("slow");
    $("#search_input").focus();
  });
  $("#close_search").on("click", function() {
    $("#search_input_box").slideUp("slow");
  });

  /*----------------------------------------------------*/
  /*  Course Slider
    /*----------------------------------------------------*/
  function active_course() {
    if ($(".active_course").length) {
      $(".active_course").owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        nav: true,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        thumbs: true,
        thumbsPrerendered: true,
        navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
        responsive: {
          0: {
            items: 1,
            margin: 0
          },
          991: {
            items: 2,
            margin: 30
          },
          1200: {
            items: 3,
            margin: 30
          }
        }
      });
    }
  }
  active_course();

  /*----------------------------------------------------*/
  /*  Event Slider
    /*----------------------------------------------------*/
  function active_event() {
    if ($(".active_event").length) {
      $(".active_event").owlCarousel({
        loop: true,
        margin: 30,
        items: 2,
        nav: false,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        thumbs: true,
        thumbsPrerendered: true
      });
    }
  }
  active_event();

  /*----------------------------------------------------*/
  /*  Testimonials Slider
    /*----------------------------------------------------*/
  function testimonials_slider() {
    if ($(".testi_slider").length) {
      $(".testi_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 2,
        autoplay: 2500,
        smartSpeed: 2500,
        dots: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          991: {
            items: 2
          }
        }
      });
    }
  }
  testimonials_slider();

  /*----------------------------------------------------*/
  /*  MailChimp Slider
    /*----------------------------------------------------*/
  function mailChimp() {
    $("#mc_embed_signup")
      .find("form")
      .ajaxChimp();
  }
  mailChimp();

  $("select").niceSelect();
})(jQuery);
