
$(document).ready(function () {
    //  sticky navbar on scroll script  //
    $(window).scroll(function () {
      //scrollY : number of pixels that the document is currently scrolled vertically.
      //if scrollY is greater than 30, then menu bar to be shown
      if (this.scrollY > 30) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  if scrollY is greater than 400, scrollbtn show, else dont show
      if (this.scrollY > 400) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //animate for scroll-up-btn
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });

});

