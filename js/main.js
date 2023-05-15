// event_box2 slider

$(document).ready(function () {
  $('.eb_slider_list').slick({
    infinite: false,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    pauseOnHover: false, //마우스 올렸을때 오토 플레이가 멈추는 기능 해제

  });
});


// 재생정지버튼 evbox2
$(".page_act .btn_stop").click(function (e) {
  e.preventDefault();
  if ($('.event_box2 .page_act').hasClass("on")) {
    $('.event_box2 .page_act').removeClass("on");
    $('.eb_slider_list').slick('slickPause');
  };
});


$(".page_act .btn_play").click(function (e) {
  e.preventDefault();
  if ($('.event_box2 .page_act').addClass("on")) {
    $('.eb_slider_list').slick('slickPlay');
  };
});

// --------my test ------------

// $(".event_box2 .slick-dots li button").click(function(e){
//   e.preventDefault();
//   if($('.event_box2 .page_act').hasClass("on")){
//     $('.event_box2 .page_act').removeClass("on");
//     $('.eb_slider_list').slick('slickPause');
//   }
//   // else if($('.event_box2 .page_act').addClass("on")){
//   //   $('.eb_slider_list').slick('slickPlay');
//   // };
// });
// let btn = $(".event_box2 .slick-dots li button");

// btn.click(function(){
//   let target = $(this);
//   let A = target.index();
//   console.log(A);

// });

//--------------------



// event_box3 slider

let card = $(".card");

card.slick({
  // infinite: false,
  slidesToShow: 1,
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  pauseOnHover: false,
});


// 재생정지버튼 evbox3

$(".pagn_act.on .btn_stop").click(function (e) {
  e.preventDefault();
  if ($('.event_box3 .pagn_act').hasClass("on")) {
    $('.event_box3 .pagn_act').removeClass("on");
    card.slick('slickPause');
  };
});


$(".pagn_act.on .btn_play").click(function (e) {
  e.preventDefault();
  if ($('.event_box3 .pagn_act').addClass("on")) {
    card.slick('slickPlay');
  };
});



// life button

let tab = $('.life_menu ul li');
let menu = $('.life_style li');

tab.mouseover(function () {
  let target = $(this);
  let index = target.index();
  console.log(index);
  menu.css({
    opacity: 0
  });
  menu.eq(index).css({
    opacity: 1
  });
});

//태생적으로 태어날때 가지고 나온 번호를 추출 --> index()


// ------ mytest

// let btn = $("#event .event_box2 .slick-dots li button ");

// btn.click(function(){
//   let target = $(this);
//   let index = target.index();
//   console.log(index);
// });
// $(document).ready(function () {
// btn.click(function(){
//   console.log("abc")
// });
// });

// $(document).ready(function () {
//   $(document).on('click', "#event .event_box2 .slick-dots li button ", function () {
//     console.log("abc")
//   });
// });






$(document).ready(function () {
  let btn = "#event .event_box2 .slick-dots li button "
  $(document).on('click', btn, function () {
    console.log("abc")
  });
});



// $(document).ready(function () {
//   let btn = "#event .event_box2 .slick-dots li button "
//   btn.click(function () {
//     console.log("abc")
//   });
// });

// let btn = "#event .event_box2 .slick-dots li button "
// btn.click(function () {
//   console.log("abc")
// });