<?php
        
        require "lib/PHPMailerAutoload.php";

        $inputJSON = file_get_contents('php://input');

        $input = json_decode($inputJSON, TRUE);

        
        
        $name = $_POST['name'];
        
        $mail = $_POST['email'];

        $mail = new PHPMailer;

        $mail-> IsSMTP();

        $mail -> Host = "smtp.yandex.ru";

        $mail -> SMTPAuth = true;

        $mail -> SMTPSecure = "ssl";

        $mail -> Port = 465;

        $mail -> CharSet = 'UTF-8';

        $mail -> Username = 'dabomjj@yandex.ru';

        $mail -> Password = 'rexthcrbq';

        $mail -> SetFrom('dabomjj@yandex.ru','Йога Смеха');

        $mail -> Subject = $name."! Вы получаете книгу основателя Йоги Cмеха Мадана Катарии в подарок!";

        $mail -> Body = '<p style="font-weight:600;">Здравствуйте, '.$name.'! Мы подготовили для Вас книгу основателя Йоги Cмеха Мадана Катарии. Приятного чтения!</p>';

        $mail -> AltBody = "Это тест письма";

        $address = $input['email'];

        $mail -> AddAddress($address, "qwerty");

        $mail->AddAttachment(__DIR__.'/yoga.pdf');

        $mail -> isHTML(true);

        if($mail->Send()){
            echo 'Отправлено';
        }else{
            echo 'Не отправлено ' . $mail -> ErrorInfo;
        }

