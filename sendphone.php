<?php 
if( $_POST ){
	require 'phpmailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$mail->isSMTP();

	$mail->Host = 'smtp.yandex.ru'; //указать свой smtp
	$mail->SMTPAuth = true;
	$mail->Username = 'frud2'; // логин от вашей почты
	$mail->Password = '100200300'; // пароль от почтового ящика
	$mail->SMTPSecure = 'ssl';
	$mail->Port = '465';

	$mail->CharSet = 'UTF-8';
	$mail->From = 'frud2@yandex.ru'; // адрес почты, с которой идет отправка
	$mail->FromName = 'Письмо с сайта строительство коттеджей'; // имя отправителя
	$mail->addAddress('k33@ya.ru', ''); //куда придет письмо
	//$mail->addAddress('email2@email.com', 'Имя 2');
	//$mail->addCC('email3@email.com');

	$mail->isHTML(true);

	$mail->Subject = 'Письмо с сайта строительство коттеджей';
	$mail->Body = "Телефон: {$_POST['number']}";     //имя name поля ввода input
	

	// $mail->SMTPDebug = 1;

	if( $mail->send() ){
		$answer = '1';
	}else{
		$answer = '0';
		/*echo 'Письмо не может быть отправлено. ';
		echo 'Ошибка: ' . $mail->ErrorInfo;*/
	}
	die( $answer );
}
?>
