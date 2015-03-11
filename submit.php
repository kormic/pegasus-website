<?php

if($_POST){


    $to_email = "ycamic@gmail.com"; //Recipient email

    //check if it's an Ajax request, otherwise exit
    if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest'){
        $output = json_encode(array('type'=>'error', 'text' => 'Sorry Request must be Ajax POST'));
        die($output); //exit script outputting json data
    }

    //Sanitize input data using PHP filter_var().
    $name = filter_var($_POST["name"],FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"],FILTER_SANITIZE_EMAIL);
    $msg = filter_var($_POST["msg"],FILTER_SANITIZE_STRING);

    //more validation
    if(strlen($name)<4){
        $output = json_encode(array('type'=>'error', 'text' => 'Name too short or empty'));
        die($output);
    }
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){ //email validation
        $output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
        die($output);
    }
    if(strlen($msg)<3){ //check emtpy message
        $output = json_encode(array('type'=>'error', 'text' => 'Too short message! Please enter something.'));
        die($output);
    }

    //email subject
    $subject = "Pegasus Contact Form";

    //email body
    $message_body = $msg."\r\n\r\n-".$name."\r\nEmail : ".$email;

    //proceed with PHP email.
    $headers = 'From: '.$name.'' . "\r\n" .
    'Reply-To: '.$email.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

        $send_mail = mail($to_email,$subject,$msg,$headers);

    if(!$send_mail)
    {
        //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
        $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
        die($output);
    }else{
        $output = json_encode(array('type'=>'message', 'text' => 'Hi '.$name .' Thank you for your email'));
        die($output);
    }
}

?>