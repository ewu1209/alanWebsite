$(function(){
  
  // Magnific Popup
  $('.popup-ajax').magnificPopup({
    type: 'ajax',
    mainClass: 'mfp-fade'
  });
  
  // Initialize Sliders
  $('.flexslider').flexslider({
    slideshow: false,
    animation: 'slide',
    touch: true
  });

  // Initialize Smooth Scroll
  $('.scroll').smoothScroll({
    offset: -80,
    speed: 1000
  });

  // Mobile Menu Toggle
  $('#mobile-toggle').click(function () {
    if ($('#main-nav').hasClass('open-nav')) {
      $('#main-nav').removeClass('open-nav');
    } else {
      $('#main-nav').addClass('open-nav');
    }
  });

  // Turn dynamic animations for iOS devices (because it doesn't look right)
  var iOS = false,
  p = navigator.platform;
  if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
    iOS = true;
  }

  // Control Dynamic Content Sliding 
  if (iOS === false) {
    $('.flyIn').bind('inview', function (event, visible) {
      if (visible === true) {
        $(this).addClass('animated fadeInUp');
      }
    });
    $('.flyLeft').bind('inview', function (event, visible) {
      if (visible === true) {
        $(this).addClass('animated fadeInLeftBig');
      }
    });
    $('.flyRight').bind('inview', function (event, visible) {
      if (visible === true) {
        $(this).addClass('animated fadeInRightBig');
      }
    });

  }

})