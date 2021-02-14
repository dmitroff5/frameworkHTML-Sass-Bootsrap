$(document).ready(function() {

	$('body').append('<div class="blackout"></div>');   //серый фон  

	
	$('.popup-link').click(function(e) {		
	   	/* Предотвращаем действия по умолчанию */
		e.preventDefault();
		e.stopPropagation();
        var boxWidth = $('.popup-box').outerWidth();
	    var boxHeight = $('.popup-box').height();
	 /* определяем нужные данные */
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		var docHeight = $(document).height();
		var scrollPos = $(window).scrollTop();
	/* auto scroll bug */
	/* Вычисляем позицию */		
		var disWidth = (winWidth - boxWidth) / 2;
		var disHeight = (winHeight/2-350) + scrollPos;
	
	   if (winHeight < 700) {
			 disHeight = scrollPos+10;
			 boxWidth = 600;
		};
		

		/* Корректный вывод popup окна, накрытие тенью, предотвращение скроллинга */
		$('.blackout').css({'width' : winWidth+'px', 'height' : docHeight+'px', 'top':scrollPos}).show();
		$('.popup-box').css({'visibility':'visible'});		/* без этой строчки не работает*/
		$('.popup-box').css({'left' : disWidth+'px', 'top': -1000+'px'});
		$('.popup-box').show().animate({'left' : disWidth+'px', 'top' : disHeight+'px'}, 500); 
		$('html,body').css('overflow', 'hidden'); 
		
		   /* Убираем баг в Firefox 
		$('html').scrollTop(scrollPos);   выкидывает вверх при нажатии в input
	}); */
	
	
	$('.popup-box').click(function(e) { 
		 /* Предотвращаем работу ссылки, если она являеться нашим popup окном */
		e.stopPropagation(); 
	});
	
	$('html').click(function() { 
		var scrollPos = $(window).scrollTop();
		var winWidth = $(window).width();
		var boxWidth = $('.popup-box').width();
		var disWidth = (winWidth - boxWidth) / 2;
		 /* Скрыть окно, когда кликаем вне его области */
		$('.popup-box').animate({'left' : disWidth+'px', 'top' : '-1000px'}, 500); /*поставить свою высоту окна*/
		$('.blackout').hide(); 	   
		$("html,body").css("overflow","auto");
		$('html').scrollTop(scrollPos); /* Убираем баг в Firefox */
		
	});
	$('.closex').click(function() { 
		var scrollPos = $(window).scrollTop();
		var winWidth = $(window).width();
		var boxWidth = $('.popup-box').width();
		var disWidth = (winWidth - boxWidth) / 2;
		/* Скрываем тень и окно, когда пользователь кликнул по X */
		$('.popup-box').animate({'left' : disWidth+'px', 'top' : '-1000px'}, 500); /*поставить свою высоту окна*/
		$('.blackout').hide(); 
		$("html,body").css("overflow","auto");	
		$('html').scrollTop(scrollPos);
	
	});
});
});