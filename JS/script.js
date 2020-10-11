$(function(){
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    var speed = 500;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

	var $body = $('body');
  var $win = $(window);
	var scroll_y = $win.scrollTop();

  	// HeaderをFixedする
	$.headerFixed = function() {
		var class_fixed = 'is-fixed';

		$win.on('scroll', function() {
			if (scroll_y <= 80) {
				$body.removeClass(class_fixed);
			} else {
				$body.addClass(class_fixed);
			}
		});
	}

	$.toggleNav = function () {
		var _btnNav = $('.nav-button');
		var _body = $('body');
		var _container = $('.global-nav');
		var _event = 'click';
		var _status = 'close';

		_btnNav.on(_event, function () {

			if (_status == 'close') {
				_status = 'open';
				_container.slideDown(200);
				_body.addClass('is-menu-open');
			} else if (_status == 'open') {
				_status = 'close';
				_container.slideUp(200);
				_body.removeClass('is-menu-open');
			}

		})

		$('.global-nav-in a').on('click', function(){
			if (window.innerWidth <= 768) {
				_btnNav.click();
			}
		});
	}
    
    // Windowイベント
	$win.on('load', function() {
		$.headerFixed();
		// $('.js-sf-group').scrollFade();

		$.toggleNav();
  });
  $win.on('scroll', function() {
		scroll_y = $win.scrollTop();
	});

});