const width = $(document).width();
const height = $(window).height();

$("body").css({
  "height": height*5 + "px"
});


// navbar 
// $("nav").css({
//   "width": width + "px"
// })

$("#skill").css({
  "margin-top": height * 3 + "px"
});

$(window).scroll(function () { 
  const scroll = $(window).scrollTop();

  if(scroll > 0 && scroll < height) {
    $("#home").css({
      "display": "flex"
    });
    $("#work").css({
      "display": "none"
    });
    $("#contact").css({
      "display": "none"
    });
  } else if(scroll > height && scroll < (height*3)) {
    $("#home").css({
      "display": "none"
    });
    $("#work").css({
      "display": "block"
    });
    $("#contact").css({
      "display": "none"
    });
  } else if(scroll > (height*3) && scroll < (height*4)) {
    $("#home").css({
      "display": "none"
    });
    $("#work").css({
      "display": "none"
    });
    $("#contact").css({
      "display": "block"
    });
  }

  if(scroll >= 0 && scroll <= (height/2)) {
    // home
    $("#ahome").addClass("active");
    $("#aabout").removeClass("active");
    $("#awork").removeClass("active");
    $("#askill").removeClass("active");
    $("#acontact").removeClass("active");
  } else if(scroll >= ((height)/2) && scroll <= ((height*3)/2)) {
    // about
    $("#ahome").removeClass("active");
    $("#aabout").addClass("active");
    $("#awork").removeClass("active");
    $("#askill").removeClass("active");
    $("#acontact").removeClass("active");
  } else if(scroll >= ((height*3)/2) && scroll <= ((height*4)/2)) {
    // work
    $("#ahome").removeClass("active");
    $("#aabout").removeClass("active");
    $("#awork").addClass("active");
    $("#askill").removeClass("active");
    $("#acontact").removeClass("active");
  } else if(scroll >= ((height*5)/2) && scroll <= ((height*6)/2)) {
    // skill
    $("#ahome").removeClass("active");
    $("#aabout").removeClass("active");
    $("#awork").removeClass("active");
    $("#askill").addClass("active");
    $("#acontact").removeClass("active");
  } else if(scroll >= ((height*6)/2)) {
    // contact
    $("#ahome").removeClass("active");
    $("#aabout").removeClass("active");
    $("#awork").removeClass("active");
    $("#askill").removeClass("active");
    $("#acontact").addClass("active");
  }

  $(".awan").css({
    // "left": scroll + "px",
    "z-index": "3",
    "top": 200 + scroll*2/3 + "px"
  })

  $(".awan2").css({
    // "left": scroll + "px",
    "z-index": "3",
    "top": 300 + scroll*2/5 + "px"
  })



});


$("#ahome").click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 'slow');

  $(this).addClass("active");
  $("#aabout").removeClass("active");
  $("#awork").removeClass("active");
  $("#askill").removeClass("active");
  $("#acontact").removeClass("active");
});

$("#aabout").click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: height
  }, 'slow');

  $("#ahome").removeClass("active");
  $(this).addClass("active");
  $("#awork").removeClass("active");
  $("#askill").removeClass("active");
  $("#acontact").removeClass("active");
});

$("#awork").click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: (height*2)
  }, 'slow');

  $("#ahome").removeClass("active");
  $("#aabout").removeClass("active");
  $(this).addClass("active");
  $("#askill").removeClass("active");
  $("#acontact").removeClass("active");
});

$("#askill").click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: (height*3)
  }, 'slow');

  $("#ahome").removeClass("active");
  $("#aabout").removeClass("active");
  $("#awork").removeClass("active");
  $(this).addClass("active");
  $("#acontact").removeClass("active");
});

$("#acontact").click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: (height*4)
  }, 'slow');

  $("#ahome").removeClass("active");
  $("#aabout").removeClass("active");
  $("#awork").removeClass("active");
  $("#askill").removeClass("active");
  $(this).addClass("active");
});

$("#hire").click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: (height*4)
  }, 'slow');
});