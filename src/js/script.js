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
  const wScroll = $(this).scrollTop();

  const titikTengah = $(window).width()/2;

  console.log(wScroll)

  $(".con-about").css({
    "left": $(window).width() - (wScroll/5) + "px"
  });

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
      $("#t-rex img").attr("src", "/src/img/pixilart-drawing.png");
    } else {
      $("#t-rex img").attr("src", "/src/img/pixil-frame-0.png");
    }

    if(wScroll > 720 && wScroll < 800) {
      $("#t-rex").css({
        "top": "80%"
      });
    }
    
    if(wScroll > 800 || wScroll < 720) {
      $("#t-rex").css({
        "top": "88%"
      });
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
  const wScroll = $(this).scrollTop();

  $(".trap").css({
    "left": trap - wScroll + "px"
  });
});