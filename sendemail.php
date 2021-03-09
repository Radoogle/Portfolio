<?php

  $to            = 'radu.harangus@gmail.com';
  $name          = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message       = $_POST['message'];
  $email_subject = "email sent from the contact page (portfolio)";

  $email_body    = "You have received a new message. Here are the details:\n 
                    Name: $name \n
                    Email: $visitor_email \n 
                    Message: \n 
                    $message";
  
  mail($to, $email_subject, $email_body);

?>
