// trap
const trap = $(window).width();

$(".trap").css({
  "left": trap + "px"
});

$("#home").css({
  "width": $(window).width() + "px"
});

$(".con-about").css({
  "left": $(window).width() + "px"
});

// scroll t-rex
$(window).scroll(function() {
  const wScroll = $(this).scrollTop()/3;

  const titikTengah = $(window).width()/2;

  console.log(wScroll)

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

    if(wScroll%2==0) {
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

$(window).scroll(function() {
  const wScroll = $(this).scrollTop();

  $(".con-about").css({
    "left": $(window).width() - (wScroll/5) + "px",
    "width": $(window).width() + "px"
  });
});