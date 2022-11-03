
// スプリングスリックスライダー要素
$('.slider').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
    breakpoint: 769,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 426,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
]
});

// サマースライダー
$('.slider_summer').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
    breakpoint: 769,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 426,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
]
});


// 秋専用
$('.slider_autumn').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
    breakpoint: 769,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 426,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
]
});

// 冬用のスライダー
$('.slider_winter').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
    breakpoint: 769,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 426,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
]
});