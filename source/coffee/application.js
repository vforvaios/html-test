var $;
$ = jQuery;

$(window).on('load', function() {
	
	var articles_list = $('.articles-list');

	articles_list.slick({
		dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: $('.prevArticle'),
	  nextArrow: $('.nextArticle')
	});
});
