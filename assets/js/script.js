// trap
const trap = $(window).width();

// navbar effect
$('a#home').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 'slow');

  $(this).addClass("active");
  $('a#about').removeClass("active");
  $('a#work').removeClass("active");
  $('a#skill').removeClass("active");
  $('a#contact').removeClass("active");
});

$('a#about').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 6704
  }, 'slow');

  $('a#home').removeClass("active");
  $(this).addClass("active");
  $('a#work').removeClass("active");
  $('a#skill').removeClass("active");
  $('a#contact').removeClass("active");
});

$('a#work').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 13462
  }, 'slow');

  $('a#home').removeClass("active");
  $('a#about').removeClass("active");
  $(this).addClass("active");
  $('a#skill').removeClass("active");
  $('a#contact').removeClass("active");
});

$('a#skill').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 20191
  }, 'slow');

  $('a#home').removeClass("active");
  $('a#about').removeClass("active");
  $('a#work').removeClass("active");
  $(this).addClass("active");
  $('a#contact').removeClass("active");
});

$('a#contact').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 26934
  }, 'slow');

  $('a#home').removeClass("active");
  $('a#about').removeClass("active");
  $('a#work').removeClass("active");
  $('a#skill').removeClass("active");
  $(this).addClass("active");
});

// navbar effect scroll
$(window).scroll(function() {
  const sc = $(this).scrollTop();

  if(sc < 2871) {
    $('a#home').addClass("active");
    $('a#about').removeClass("active");
    $('a#work').removeClass("active");
    $('a#skill').removeClass("active");
    $('a#contact').removeClass("active");
  }else if(sc > 2871 && sc < 9568) {
    $('a#home').removeClass("active");
    $('a#about').addClass("active");
    $('a#work').removeClass("active");
    $('a#skill').removeClass("active");
    $('a#contact').removeClass("active");
  } else if (sc > 9568 && sc < 16312) {
    $('a#home').removeClass("active");
    $('a#about').removeClass("active");
    $('a#work').addClass("active");
    $('a#skill').removeClass("active");
    $('a#contact').removeClass("active");
  } else if (sc > 16312 && sc < 23113) {
    $('a#home').removeClass("active");
    $('a#about').removeClass("active");
    $('a#work').removeClass("active");
    $('a#skill').addClass("active");
    $('a#contact').removeClass("active");
  } else if(sc > 23113) {
    $('a#home').removeClass("active");
    $('a#about').removeClass("active");
    $('a#work').removeClass("active");
    $('a#skill').removeClass("active");
    $('a#contact').addClass("active");
  }

  console.log(sc);
});
// end navbar effect

// container
$(".trap").css({
  "left": trap + "px"
});

$("#home").css({
  "width": $(window).width() + "px"
});

$(".con-about").css({
  "left": $(window).width() + "px"
});

$(".con-work").css({
  "left": $(window).width()*2 + "px"
});

$(".con-skill").css({
  "left": $(window).width()*3 + "px"
});

$(".con-contact").css({
  "left": $(window).width()*4 + "px"
});
// container end

// scroll t-rex
$(window).scroll(function() {
  const wScroll = $(this).scrollTop()/3;

  const titikTengah = $(window).width()/2;

  // t-rex scroll
  if(wScroll > 30) {
    $("#t-rex").css({
      "left": 30 + wScroll + "px"
    });

    if(wScroll > titikTengah) {
      $("#t-rex").css({
        "left": titikTengah + "px"
      });
    }

    if(Math.round(wScroll%2)==0) {
      $("#t-rex img").attr("src", "./assets/img/pixilart-drawing.png");
    } else {
      $("#t-rex img").attr("src", "./assets/img/pixil-frame-0.png");
    }

    if(wScroll > 700 && wScroll < 900) {
      if(wScroll > 754 && wScroll < 810) {
        $("#t-rex").css({
          "top": "80%"
        });
      }
      
      if(wScroll > 810 || wScroll < 754) {
        $("#t-rex").css({
          "top": "89%"
        });
      }

    }

    if(wScroll > 2000 && wScroll < 2250) {
      if(wScroll > 2119 && wScroll < 2195) {
        $("#t-rex").css({
          "top": "80%"
        });
      }
  
      if(wScroll > 2195 || wScroll < 2119) {
        $("#t-rex").css({
          "top": "89%"
        });
      }

    }
  }
});

// judul scroll
$(window).scroll(function() {
  const wScroll = $(this).scrollTop();
  const judulLeft = 150;
  const profileLeft = 700;

   // judul scroll
   if(judulLeft == 0) {
    $(".judul").css({
      "left": "-" + wScroll/2 + "px"
    });
  } else {
    $(".judul").css({
      "left": judulLeft - (wScroll/5) + "px"
    });
  }

  if(judulLeft == 0) {
    $(".profile").css({
      "left": "-" + wScroll/2 + "px"
    });
  } else {
    $(".profile").css({
      "left": profileLeft - (wScroll/5) + "px"
    });
  }
});


// scroll profile
$(window).scroll(function() {
  const wScroll = $(this).scrollTop();

  // profile scroll
  $(".profile").css({
    "transform": "rotate(-"+ wScroll/10 +"deg)"
  });
});

  

// trap scroll
$(window).scroll(function() {
  const wScroll = $(this).scrollTop()/3;

  $(".trap1").css({
    "left": trap - wScroll + "px"
  });

  $(".trap2").css({
    "left": (trap*2) - wScroll + "px"
  });

});


// about scroll
$(window).scroll(function() {
  const wScroll = $(this).scrollTop();

  $(".con-about").css({
    "left": $(window).width() - (wScroll/5) + "px",
    "width": $(window).width() + "px"
  });
});

// work scroll
$(window).scroll(function() {
  const wScroll = $(this).scrollTop();

  $(".con-work").css({
    "left": ($(window).width()*2) - (wScroll/5) + "px",
    "width": $(window).width() + "px"
  });
});

// skill scroll
$(window).scroll(function() {
  const wScroll = $(this).scrollTop();

  $(".con-skill").css({
    "left": ($(window).width()*3) - (wScroll/5) + "px",
    "width": $(window).width() + "px"
  });
});

// contact scroll
$(window).scroll(function() {
  const wScroll = $(this).scrollTop();

  $(".con-contact").css({
    "left": ($(window).width()*4) - (wScroll/5) + "px",
    "width": $(window).width() + "px"
  });
});