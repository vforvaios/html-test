;(function() {
	"use strict";

	var sticky;
	var initStickyElement = function(el) {
		if(window.innerWidth>1024) {
			if(!$('.sticky-wrapper').length) {
				sticky = new Waypoint.Sticky({
				  element: el,
				  handler: function(direction) {
				    $('header').toggleClass('stuck')
				  }
				});
			}
		} else {
			if($('.sticky-wrapper').length) {
				sticky.destroy();
			}
		}
	};

	$(window).on('load', function() {
		var articles_list = $('.articles-list');
		var trigger_nav = $('.trigger-nav');
		var close_nav = $('.close-menu');

		articles_list.slick({
			dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $('.prevArticle'),
		  nextArrow: $('.nextArticle')
		});

		//handling the menus
		trigger_nav.on('click', function() {
			$(this).next('nav').addClass('open');
		});

		close_nav.on('click', function() {
			$(this).closest('nav').removeClass('open');
		});

		initStickyElement($('.social-icons.for-desktop'));

	});

	// resize event always debounced with lodash
	$(window).resize(_.debounce(function() {
		initStickyElement($('.social-icons.for-desktop'));
	}, 200));
	

})(jQuery);