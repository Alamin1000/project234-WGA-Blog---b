(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });


  // section-animation
  // function elementInView(elem){
  //   return $(window).scrollTop() < $(elem).offset().top + $(elem).height() ;
  // };
  
  // $(window).scroll(function(){
  //   if (elementInView($('.section-a-selfie-healthy')))
  //     console.log('there it is, wooooohooooo!');
  // });
  

  // let check = $(window).scrollTop() < $(this).offset().top + $(this).height()

  // $(window).scroll(function(){
  //   const selectorS = document.querySelectorAll('section');
  //   for (let elmN in selectorS) {
  //     const thisIs = selectorS[elmN];
  //     // console.log(selectorS[elmN]);
  //     let check = $(window).scrollTop() < $(thisIs).offset().top + $(thisIs).height();
  //     if (check){
  //       thisIs.addClass('section-appear')
  //     }
  //   }
  //   // $('section').each(function(){
  //   //   {
  //   //     var thisIs = $(this);
  //   //     let check = $(window).scrollTop() < $(thisIs).offset().top + $(thisIs).height();
  //   //     if (check){
  //   //       thisIs.addClass('section-appear')
  //   //     }
  //   //   }
  //   // })
  // });


})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // preloader
  $("#preloader").fadeOut(500);

})











