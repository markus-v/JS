$(function () {
	//Carousel
	$('.jcarousel').jcarousel();
	$('.jcarousel-pagination')
	.on('jcarouselpagination:active', 'a', function() {
		$(this).addClass('active');
	})
	.on('jcarouselpagination:inactive', 'a', function() {
		$(this).removeClass('active');
	})
	.jcarouselPagination();
	$('.jcarousel').jcarousel();
	$('.jcarousel').jcarouselAutoscroll({
		interval: 3000,
		target: '+=1',
		autostart: true
	});


	function close_accordion() {
		$('.accordion-item .accordion-item-tittle').removeClass('item_active');
		$('.accordion-item .accordion-item-content').slideUp(300).removeClass('content_open');
		$('.accordion-item-tittle span').text('+');
	};

	$('.accordion-item-tittle').click(function(e) {
		var attr = $(this).attr('href');
		close_accordion();

		$(this).addClass('item_active');
		$('.accordion-item-tittle').not($(this)).removeClass('item_active');
		$('.accordion-item ' + attr).slideDown(400).addClass('content_open'); 
		$('.item_active span').text('-');
		e.preventDefault();



	});

})