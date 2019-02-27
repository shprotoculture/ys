<?php
        
        require "lib/PHPMailerAutoload.php";
        
		$inputJSON = file_get_contents('php://input');

        $input = json_decode($inputJSON, TRUE);

        $param = $input['param'];
        $name = $input['name'];
        $email = $input['email'];
        $phone = $input['phone'];
        $msg = $input['msg'];

		$message .= "
            <tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Форма</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$param</td>
			</tr>
			<tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Имя</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$name</td>
			</tr>
			<tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Email</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$email</td>
			</tr>
            <tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$phone</td>
			</tr>
            <tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Сообщение</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$msg</td>
			</tr>
			";

		$message = "<table style='width: 100%;'>$message</table>";

        $mail = new PHPMailer;

        $mail-> IsSMTP();

        $mail -> Host = "smtp.yandex.ru";

        $mail -> SMTPAuth = true;

        $mail -> SMTPSecure = "ssl";

        $mail -> Port = 465;

        $mail -> CharSet = 'UTF-8';

        $mail -> Username = 'dabomjj@yandex.ru';

        $mail -> Password = 'rexthcrbq';

        $mail -> SetFrom('dabomjj@yandex.ru','Академия Йоги Смеха');

        $mail -> Subject = "Заявка с сайта Академия Йоги Смеха";

        $mail -> Body = $message;

        $mail -> AltBody = "Это тест письма";

        $address = $_POST['email'];

        $mail -> AddAddress('yogacmexa@yandex.ru', "qwerty");

        $mail -> isHTML(true);

        if($mail->Send()){
            echo 'Отправлено';
        }else{
            echo 'Не отправлено ' . $mail -> ErrorInfo;
        }


