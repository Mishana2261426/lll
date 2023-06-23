$(document).ready(function(){
	new WOW().init();

	const heroSlider = new Swiper('.hero-slider', {
		speed: 0,
		preloadImages: true,
		lazy: true,
		loop: true,
		// effect: 'fade',
		// fadeEffect: {
		// 	crossFade: false
		// },
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.hero-arrows .slider-next',
			prevEl: '.hero-arrows .slider-prev',
		},
    });

	$('[data-fancybox="gallery"]').fancybox({
		hash: false,
		thumbs : {
			autoStart : true,
			axis      : 'x'
		},
	});
	$(".blog-author").stick_in_parent({offset_top: 120});
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		// if( (scroll > 0)&&(scroll < 200) ){
		// 	$('.image-scaling').addClass('scale-img');
		// }
		if(scroll > 300){
			$('.image-scaling').removeClass('scale-img');
		}
	});
	$('.fakeBtn-portfolio span').on('click', function(){
		$('.gallery-item').show();
		$(this).remove();
	});
	$('.js-calc-run').on('click',function(){
		var type = $('[name=calc-type]:checked').val();
		if(!type){type = 1;}
		var area = Number($('.js-range-input').val());
		var keys = Object.keys(typeCalc[type]);
		var curKey;

		for(var i=0;i<keys.length;i++){
			if(area>Number(keys[i])){
				curKey = Number(keys[i]);
			}
		}
		$('.js-calc-sum').html((area*typeCalc[type][curKey]).toLocaleString('ru'));
	});

	$(".blog-detail__anchors a").on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 110
		}, 1000);
	});

	$('.designes-slider').owlCarousel({
		margin: 30,
		loop: true,
		dots: false,
		nav: true,
		responsive : {
			0 : {
				items: 1,
			},
			992 : {
				items: 3,
			},
			992 : {
				items: 4,
			},
		}
	});

	$('.reviews-slider').owlCarousel({
		margin: 74,
		loop: true,
		dots: false,
		responsive : {
			0 : {
				items: 1,
			},
			992 : {
				items: 2,
			},
		}
	});

	$('.gallery-slider').owlCarousel({
		items: 1,
		margin: 13,
		loop: true,
	});


	$('.slide-toggle__head').on('click', function(){
		$(this).closest('.slide-toggle').toggleClass('open').find('.slide-toggle__body').stop().slideToggle();
	})

	$(".js-range-slider").ionRangeSlider({
		skin: "round",
		onChange: function (data) {
			$('.js-range-input').val($('.js-range-slider').val());
			var type = $('[name=calc-type]:checked').val();
			if(!type){type = 1;}
			var area = Number($('.js-range-input').val());
			var keys = Object.keys(typeCalc[type]);
			var curKey;

			for(var i=0;i<keys.length;i++){
				if(area>Number(keys[i])){
					curKey = Number(keys[i]);
				}
			}
			$('.js-calc-sum').html((area*typeCalc[type][curKey]).toLocaleString('ru'));
		}
	});

	instance = $(".js-range-slider").data("ionRangeSlider");
	$('.js-range-input').on("input", function() {
		var val = $(this).prop("value");
        instance.update({
        	from: val
        });
    });
	$('[name="calc-type"]').on("change", function() {
		var type = $('[name=calc-type]:checked').val();
		if(!type){type = 1;}
		var area = Number($('.js-range-input').val());
		var keys = Object.keys(typeCalc[type]);
		var curKey;

		for(var i=0;i<keys.length;i++){
			if(area>Number(keys[i])){
				curKey = Number(keys[i]);
			}
		}
		$('.js-calc-sum').html((area*typeCalc[type][curKey]).toLocaleString('ru'));
	});
	$('.js-range-input').on("change", function() {
		var type = $('[name=calc-type]:checked').val();
		if(!type){type = 1;}
		var area = Number($('.js-range-input').val());
		var keys = Object.keys(typeCalc[type]);
		var curKey;

		for(var i=0;i<keys.length;i++){
			if(area>Number(keys[i])){
				curKey = Number(keys[i]);
			}
		}
		$('.js-calc-sum').html((area*typeCalc[type][curKey]).toLocaleString('ru'));
    });
});