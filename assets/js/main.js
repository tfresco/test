$(document).ready(function(){
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    autoplay: false,
    autoplayDisableOnInteraction: false,
  });


  // Mobile menu
  $(".hamburger-nav").on("click", function(){
    $(".menu").animate({
      height: 'toggle'
    });
  });


  // Smooth scroll to element
  var $root = $('html, body');
  $('a[href^="#"]:not([href="#"])').click(function () {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);

      return false;
  });


  // Change Menu Bar Background
  $(window).scroll(function(){
     if ($(this).scrollTop() < $("#lab_video_slider").height()) {
         $('#menu-top').css("top","0");
         $('#menu-top').css("background-color","rgba(0, 0, 0, 0.25)");
     }
     else{
       $('#menu-top').css("background-color","rgba(0, 0, 0, 0.85)");

     }
  });


  //Search box functionality
  var searchBox = $("#search_input_box");
  $("#search_button").click(function() {
    searchBox.show();
    searchBox.toggleClass("search-box-clicked");
  });
});
