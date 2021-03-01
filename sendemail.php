<?php

  $to  = 'radu.harangus@gmail.com';
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $email_subject = "email sent from the contact page (portfolio)";

  $email_body = "You have received a new message. ".
                " Here are the details:\n Name: $name \n ".
                "Email: $email_address\n Message \n $message";


  echo '<script>alert("Welcome to Geeks for Geeks")</script>'; 
  

if ($_POST["message"]) {
    mail($to, $email_subject, $email_body. "From: $visitor_email");
}

?>
