// HOME画面スライド

$(function(){  
	$('#slider').vegas({
		slides: [
		{ src: './images/spring/sakura.jpg'},
		{ src: './images/summer/summer.jpg'},
		{ src: './images/autumn/fall.jpg'},
		{ src: './images/winter/fuyu.jpg'}
		],
		overlay: true,
		transition: 'blur',
		transitionDuration: 2000,
		delay: 5000,
		animationDuration: 20000,
		animation: 'kenburns',
	});
});


// スクロール動作により動くアニメーション
function fadeAnime() {
  
  $('.fadeInTrigger').each(function()
  {
    var elemPos = 
    $(this).offset().top-100;

      var scroll = 
    $(window).scrollTop();
      var windowHeight = 
    $(window).height();
      if (scroll >= elemPos - windowHeight){

        $(this).addClass('fadeIn');

      }else{

        $(this).removeClass('fadeIn')
      }
  });

  $('.Trigger').each(function()
  {
    var elemPos = 
    $(this).offset().top-100;

      var scroll = 
    $(window).scrollTop();
      var windowHeight = 
    $(window).height();
      if (scroll >= elemPos - windowHeight){

        $(this).addClass('blur');

      }else{

        $(this).removeClass('blur')
      }
  });


}


$(window).scroll(function (){
  fadeAnime();
});


// ページトップリンク
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){
		$('#page_top').removeClass('DownMove');
		$('#page_top').addClass('UpMove');
	}else{
		if($('#page_top').hasClass('UpMove')){
			$('#page_top').removeClass('UpMove');
			$('#page_top').addClass('DownMove');
		}
	}
}


$(window).scroll(function () {
	PageTopAnime();
});

$(window).on('load', function () {
	PageTopAnime();
});

// #page-topをクリックした際の設定
$('#page_top a').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
