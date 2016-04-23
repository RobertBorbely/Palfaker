(function($){
  var windowHeight = document.documentElement.clientHeight,
      $fullPicture = $(".full-picture"),
      $heroOverlay = $(".full-picture > .hero-overlay");

  var height, width;
  width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  height = window.innerHeight > 0 ? window.innerHeight : screen.height;


  function bindScroll(height){
    var $nav = $(".navigation");

    $(window).scroll(function () {
      if ($(this).scrollTop() > height) {
        $nav.addClass("fixedNav");
      } else {
        $nav.removeClass("fixedNav");
      }
    });
  }
  
  function setFullPicture() {
    $fullPicture.css("height", height);
    $heroOverlay.css("height", height);
  }
  
  function smoothScroll() {
    $('a[href*="#"]:not([href="#myCarousel"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  };
  


  $(document).ready(function(){
    $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
      $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
      e.preventDefault();
    });
    bindScroll(200);
    setFullPicture();
    smoothScroll();

    $(window).resize(function() {
      width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      height = window.innerHeight > 0 ? window.innerHeight : screen.height;
      $fullPicture.css('height', height);
      $heroOverlay.css('height', height);
    });
  });

})(jQuery);