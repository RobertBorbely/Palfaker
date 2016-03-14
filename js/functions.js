(function($){

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


  $(document).ready(function(){
    $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
      $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
      e.preventDefault();
    });
    bindScroll(200);
  });

})(jQuery);