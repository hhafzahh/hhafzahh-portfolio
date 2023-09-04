
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

 //  Typing Text Animation  //
 var typed = new Typed(".auto-type", {
    strings: [
      "Fullstack Developer",
      "Software Developer",
      "Python Developer",
      "Mobile App Developer",
      "Website Developer"
    ],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });

  var typed = new Typed(".auto-type-2", {
    strings: [
      "Fullstack Developer",
      "Software Developer",
      "Python Developer",
      "Mobile App Developer",
      "Website Developer"
    ],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });


//  Owl Carousel for projects section  //
  
$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });

     //  Toggle Navbar for Mobile App Screen
     $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
      });