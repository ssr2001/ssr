var mySwiper = new Swiper('.swiper-container', {
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});

//header設定//
$(function () {
    function end_loader() {
      $('.loader').fadeOut(800);
    }
    $(window).on('load', function () {
      setTimeout(function () {
        end_loader();
      }, 3000)
    })
  })


var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        //ヘッダーを引っ込める高さを指定//
        if(winScrollTop >= 500){
        $('.site_header').addClass('hide');
        }
    } else {
        $('.site_header').removeClass('hide');
    }
    startPos = winScrollTop;
});
//topscrollボタン//
$(function(){
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });
