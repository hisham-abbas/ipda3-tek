$(function() {

  // body paddingTop according to navbar. 
  $("body").css("paddingTop", $(".navbar").height() + 20);

  // toggle links.
  $(".fa-bars").click(function() {
    $(".toggle-link").slideToggle();
  })

  $(".navbar .links li.toggle-link a").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).data("scroll")).offset().top
    }, 1000);
  });

  // slider for our services.
  $(".our-services .arrows .fa-arrow-left").click(function() {
    $(".our-services .col-md-12.active").next().addClass("active");
    $(".our-services .col-md-12.active").prev().removeClass("active");
  });
  $(".our-services .arrows .fa-arrow-right").click(function() {
    $(".our-services .active").prev().addClass("active");
    $(".our-services .active").next().removeClass("active");
  });

  // slider for our favorite clients.
  $(".clients .arrows .fa-arrow-left").click(function() {
    $(".clients .active").next().addClass("active");
    $(".clients .active").prev().removeClass("active");
  });
  $(".clients .arrows .fa-arrow-right").click(function() {
    $(".clients .active").prev().addClass("active");
    $(".clients .active").next().removeClass("active");
  });

});