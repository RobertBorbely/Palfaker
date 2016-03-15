(function($){
  var windowHeight = document.documentElement.clientHeight,
      $fullPicture = $(".full-picture"),
      $heroOverlay = $(".full-picture > .hero-overlay");

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
    $fullPicture.css("height", windowHeight);
    $heroOverlay.css("height", windowHeight);
  }
  


  $(document).ready(function(){
    $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
      $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
      e.preventDefault();
    });
    bindScroll(200);
    setFullPicture();
  });

})(jQuery);