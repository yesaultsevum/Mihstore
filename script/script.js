(function () {

	$('.list-pages__item').on('click', function(e){
		e.preventDefault();
		$('.list-pages__item').removeClass('list-pages__item_active');
		$(this).addClass('list-pages__item_active');
	});

	$('.header-bottom-menu-item a').on('click', function(e){
		e.preventDefault();
		$('.header-bottom-menu-item a').removeClass('header-bottom-menu-item_active');
		$('.select').removeClass('select_visible');
		$(this).addClass('header-bottom-menu-item_active');
		$(this).find('.select').addClass('select_visible');
	});

}());