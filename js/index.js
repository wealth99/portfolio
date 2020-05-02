$(document).ready(function () {
  // index.html location
  $(".visual-01").click(function () {
    location.href = "index-sub02.html";
  });

  var w = $(window).outerWidth();

  // carousel btn add function
  function btnAdd() {
    $(".btnAdd").append("<li></li>");
    $(".btnAdd > li")
      .last()
      .attr({ "data-target": "#best-seller", "data-slide-to": "3" });
  }

  if (w < 992) {
    btnAdd();
    $("#buy").on("click", function (e) {
      return false;
    });
    $(".best-inner").children().last().addClass("item");
  } else {
    $("#buy").off("click");
    $(".best-inner").children().last().removeClass("item");
  }

  // index.html - resize (buy, bestBtn, carousel)-btn on/off
  $(window).resize(function () {
    w = $(window).outerWidth();
    if (w < 992) {
      $(".best-inner").children().last().addClass("item");
      $("#buy").on("click", function () {
        return false;
      });
      if ($(".btnAdd > li").length <= 3) {
        btnAdd();
      }
    } else {
      $(".best-inner").children().last().removeClass("item");
      $("#buy").off("click");
      if ($(".btnAdd > li").length >= 4) {
        $(".btnAdd > li").last().remove();
      }
    }
  });

  // index.html - bootstrap touchSwipe
  $(function () {
    $(".carousel-inner").swipe({
      swipeLeft: function () {
        $(this).parent().carousel("next");
      },
      swipeRight: function () {
        $(this).parent().carousel("prev");
      },
      threshold: 0,
    });
  });

  //  index.html - new-product
  $(".new-product-sub > div").on("click", function (e) {
    var index = $(this).index();
    e.preventDefault();
    if ($(this).hasClass("active")) {
      return false;
    } else {
      $(this).addClass("active").siblings().removeClass("active");
      $(".new-product-main > div")
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  });

  // index.html - new-product (contents change)
  var num = 0;
  function time() {
    num++;
    if (num % 2 == 0) {
      $(".new-product-01-sub > div:eq(0)")
        .add(".new-product-03-sub > div:eq(0)")
        .fadeIn(1000);
      $(".new-product-01-sub > div:eq(1)")
        .add(".new-product-03-sub > div:eq(1)")
        .fadeOut(1000);
    } else {
      $(".new-product-01-sub > div:eq(1)")
        .add(".new-product-03-sub > div:eq(1)")
        .fadeIn(1000);
      $(".new-product-01-sub > div:eq(0)")
        .add(".new-product-03-sub > div:eq(0)")
        .fadeOut(1000);
    }
  }
  var timer = setInterval(function () {
    time();
  }, 3000);
  $(".new-product-main > div > div").hover(
    function () {
      clearInterval(timer);
    },
    function () {
      timer = setInterval(function () {
        time();
      }, 3000);
    }
  );

  // index.html - mobile new-product toggle
  $(".toggle-controls > ul > li").on("click", function (e) {
    var index = $(this).index();
    console.log(index);
    if ($(this).hasClass("active")) {
      return false;
    } else {
      e.preventDefault();
      $(this).addClass("active").siblings().removeClass("active");
      $(".new-product-main > div")
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
      $(".new-product-sub > div")
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  });

  // index.html - promotion slide
  $(".pro-slide").on("click", function () {
    $(this)
      .siblings()
      .stop()
      .animate({ width: 16.5 + "%" }, 500);
    $(this)
      .delay(300)
      .stop()
      .animate({ width: 66 + "%" }, 500);
    // $(this).stop().animate({"width": 66 + "%"}, 500).siblings().stop().animate({ "width": 16.5 + "%"}, 500)
    $(this)
      .find(".bg")
      .stop()
      .fadeOut(500)
      .parent()
      .siblings()
      .find(".bg")
      .stop()
      .fadeIn(500);
    $(this)
      .find(".pro-content > div")
      .stop()
      .fadeIn(500)
      .parents(".pro-slide")
      .siblings()
      .find(".pro-content > div")
      .stop()
      .fadeOut(500);
  });

  $(".fixed-top > a").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // modal amount
  var count = 1;
  $(".increase").click(function () {
    if (!(count == 9)) {
      count++;
      $(".amount").text(count);
    } else {
      return;
    }
  });
  $(".decline").click(function () {
    if (!(count == 1)) {
      count--;
      $(".amount").text(count);
    } else {
      return;
    }
  });
  $(".close").click(function () {
    $(".amount").text(1);
  });

  // index.html - beauty-view hover
  $(".beauty-view").hover(
    function () {
      $(".beauty").css("box-shadow", "0px 0px 15px rgba(0,0,0, 0.5)");
    },
    function () {
      $(".beauty").css("box-shadow", "0px 0px 3px rgba(0,0,0, 0.5)");
    }
  );

  var product = $(".new-product").offset();
  var line02 = $(".lip-line02").offset();
  var fixed = $(".fixed-top > a");
  var locationHref = location.href;
  var data = [];
  data.push(locationHref);
  $(window).scroll(function () {
    var wTop = $(this).scrollTop();
    if (data[0].includes("index.html")) {
      if (wTop >= product.top) {
        $(fixed).css("display", "block");
      } else {
        $(fixed).css("display", "none");
      }
    }
    if (data[0].includes("index-sub02.html")) {
      if (wTop >= line02.top) {
        $(fixed).css("display", "block");
      } else {
        $(fixed).css("display", "none");
      }
    }
  });

  // sub02.html  - line04
  $(window).resize(function () {
    w = $(window).outerWidth();
    if (w < 400) {
      $(".lip-line04-content").css("display", "none");
      $(".lip-line04-content-show").css("display", "block");
    } else {
      $(".lip-line04-content").css("display", "block");
      $(".lip-line04-content-show").css("display", "none");
    }
  });

  if (w < 400) {
    $(".lip-line04-content").css("display", "none");
    $(".lip-line04-content-show").css("display", "block");
  } else {
    $(".lip-line04-content").css("display", "block");
    $(".lip-line04-content-show").css("display", "none");
  }

  // sub02.html - line05 show
  $(".lip-line05-content-title > li").click(function (e) {
    e.preventDefault();
    var index = $(this).index();
    $(".lip-line05-content  div")
      .eq(index)
      .addClass("show")
      .siblings()
      .removeClass("show");
  });
});
