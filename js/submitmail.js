$(function(){
   $('.contact').find('input:not(.submit-contact), textarea').val(''); //id формы, id кнопки отправки - очистка полей при обновлении
	$('.contact').submit(function(){                        //id формы 
     
		var errors = false;
	//	$(this).find('span').empty(); 
		
		
		$(this).find('.phone-mail').each(function(){
			if( $.trim( $(this).val() ) == '' ) {
				errors = true;
				$('.submit-contact').next().text( 'Не заполнено поле ' + $(this).prev().text() );  //id кнопки отправки
			}
		});

		if( !errors ){
			var data = $('.contact').serialize();                   //id формы
			$.ajax({
				url: 'sendmail.php',                             //php файл отправки формы 
				type: 'POST',
				data: data,
				beforeSend: function(){
					$('.submit-contact').next().text('отправляю...');       //id кнопки отправки
				},
				success: function(res){
					if( res == 1 ){
						$('.contact').find('input:not(.submit-contact), textarea').val('');							//id формы, id кнопки отправки
                        $('.submit-contact').next().text('Вам перезвонят в ближайшее время');						//id кнопки отправки
                         var scrollPos = $(window).scrollTop();
		                  var winWidth = $(window).width();
		                  var boxWidth = $('.popup-box').width();
		                  var disWidth = (winWidth - boxWidth) / 2;
                        
                        $('.popup-box').delay(2000).animate({'left' : disWidth+'px', 'top' : '-1000px'}, 500); /*поставить свою высоту окна*/
		                  $('.blackout').hide(); 
		                  $("html,body").css("overflow","auto");	
		                  $('html').scrollTop(scrollPos);
					}else{
						$('.submit-contact').next().empty();               //id кнопки отправки
						alert('ошибка отправки');
					}
				},
				error: function(){
					alert('Ошибка отправки');
               $('.submit-contact').next().empty();                                     //id кнопки отправки
               $('.contact').find('input:not(.submit-contact), textarea').val('');                                //id формы, id кнопки отправки
				}
			});
		}

		return false;
	});

});
