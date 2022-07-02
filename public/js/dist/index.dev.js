"use strict";

//================
// 手機版 PC版 menu nav
//================
// 定義視窗寬度的變數
var windowWidth = $(window).width(); // 進網頁直接執行一次 判斷

if (windowWidth >= 768) {
  // 大於等於768執行
  // $('nav>ul>li').hover(function(){}, function(){})
  $('header>.container nav>ul>li').hover(function () {
    // 滑鼠滑入執行
    $(this).find('.submenu').addClass('active');
  }, function () {
    // 滑鼠滑出執行
    $(this).find('.submenu').removeClass('active');
  });
} else {
  // 小於768執行
  $('#btn-nav-switch').on('click', function () {
    $('header>.container nav').toggleClass('active');
  }); // btn-nav-switch end

  $('header>.container nav>ul>li').on('click', function () {
    $(this).find('.submenu').toggleClass('active');
  }); // nav>ul>li end
} // windowWidth>=768 end
// 捲軸事件
// 定義捲軸高變數


var offsetTop;
var product1Top = $('.bgc-pink').offset().top;
$(window).scroll(function () {
  offsetTop = $(window).scrollTop(); //console.log( '捲軸高', offsetTop )
  // console.log('product1',product1Top)
  //    if( offsetTop >=  product1Top){
  //         console.log('test')
  //    }
  // 捲軸高度>=900，會出現page-top的按鈕

  if (offsetTop >= 900) {
    $('.page-top').addClass('active');
  } else {
    $('.page-top').removeClass('active');
  }
}); //scroll end
// 點按page-top回到最上方

$('.page-top').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  });
}); //.page-top