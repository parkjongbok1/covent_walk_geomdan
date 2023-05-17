$(document).ready(function () {
  $(".pr_slider").slick({
    dots: true,
    infinite: true,
    arrows: true,
    prevArrow: $(".premium_p"), //이전 화살표
    nextArrow: $(".premium_n"), //다음 화살표
    autoplay: true,
    autoplaySpeed: 3200,
    speed: 800,
    slidesToShow: 1, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    fade: true,
    customPaging: function (slider, i) {
      var target_txt = $(slider.$slides[i]).attr("data-slide-nav");

      var thumb = "<span>" + target_txt + "</span>";

      return thumb;
    },
  });

  function slickActive() {
    if ($(".p_item01").hasClass("slick-active")) {
      $(".desc.pr_01").addClass("active");
    } else if ($(".p_item02").hasClass("slick-active")) {
      $(".desc.pr_02").addClass("active");
    } else if ($(".p_item03").hasClass("slick-active")) {
      $(".desc.pr_03").addClass("active");
    } else if ($(".p_item04").hasClass("slick-active")) {
      $(".desc.pr_04").addClass("active");
    } else if ($(".p_item05").hasClass("slick-active")) {
      $(".desc.pr_05").addClass("active");
    } else if ($(".p_item06").hasClass("slick-active")) {
      $(".desc.pr_06").addClass("active");
    } else if ($(".p_item07").hasClass("slick-active")) {
      $(".desc.pr_07").addClass("active");
    } else if ($(".p_item08").hasClass("slick-active")) {
      $(".desc.pr_08").addClass("active");
    }
  }

  $(".pr_slider").on({
    init: function (event, slick) {},
    beforeChange: function (event, slick, currentSlide, nextSlide) {
      $(".desc").removeClass("active");
    },
    afterChange: function (event, slick, currentSlide, nextSlide) {
      slickActive();
    },
  });
});
