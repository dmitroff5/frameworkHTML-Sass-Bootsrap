$(function(){
   $('#phone-number').find('input:not(#submit-button), textarea').val(''); //id формы, id кнопки отправки - очистка полей при обновлении
	$('#phone-number').submit(function(){                        //id формы 
     
		var errors = false;
		//$(this).find('span').empty(); 
		
		
		$(this).find('input, textarea').each(function(){
			if( $.trim( $(this).val() ) == '' ) {
				errors = true;
				$('#submit-button').next().text( 'Не заполнено поле "телефон" ' + $(this).prev().text() );  //id кнопки отправки
			}
		});

		if( !errors ){
			var data = $('#phone-number').serialize();                   //id формы
			$.ajax({
				url: 'sendphone.php',                             //php файл отправки формы 
				type: 'POST',
				data: data,
				beforeSend: function(){
					$('#submit-button').next().text('отправляю...');       //id кнопки отправки
				},
				success: function(res){
					if( res == 1 ){
						$('#phone-number').find('input:not(#submit-button), textarea').val('');							//id формы, id кнопки отправки
                        $('#submit-button').next().text('Вам перезвонят в ближайшее время');						//id кнопки отправки
					}else{
						$('#submit-button').next().empty();               //id кнопки отправки
						alert('ошибка отправки');
					}
				},
				error: function(){
					alert('Ошибка отправки');
               $('#submit-button').next().empty();                                     //id кнопки отправки
               $('#phone-number').find('input:not(#submit-button), textarea').val('');                                //id формы, id кнопки отправки
				}
			});
		}

		return false;
	});

});




