// ====================Preloder Start===============

let preloader = document.querySelector('#preloader');
window.addEventListener('load', () => {
  preloader.style = 'display: none;'
})

// ====================Preloder End===============

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// ================Photo Tour Slide Start=================

$('.photo_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '.prevarro',
  nextArrow: '.nextarro',
  asNavFor: '.dot_slide'
});
$('.dot_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.photo_slide',
  fade: true,
  dots: false,
  arrows: false
});

// ================Photo Tour Slide End=================

// =============Apartments Slide Part Start=================

$('.aparts_slide').slick({
  slidesToShow: 1,
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false,
  asNavFor: '.aparts_menu_slide',
});

$('.aparts_menu_slide').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.aparts_slide',
  dots: false,
  focusOnSelect: true,
  prevArrow: '.parro',
  nextArrow: '.narro'
});

// =============Apartments Slide Part End=================

// =============Lifestyle Slide Part End=================



$('.lifestyle_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  prevArrow: '.life_prevarro',
  nextArrow: '.life_nextarro',
  asNavFor: '.life_slide_short'
});


$('.life_slide_short').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.lifestyle_slide',
  arrows: false
  
});

// =============Lifestyle Slide Part End=================

// =============Network Slide Part Start=================

$('.network_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  dots: true,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa-solid fa-arrow-left-long net_parro"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right-long net_narrow"></i>'
});


new VenoBox({
  selector: '.my-video-links',
});
// =============Network Slide Part End=================