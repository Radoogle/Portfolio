<?php

  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $email_subject = "email sent from the contact page (portfolio)";

if ($_POST["message"]) {
    mail("radu.harangus@gmail.com", "$email_subject",

    $_POST["You have received a new message from the user $name.\n".
    "Here is the message:\n $message."]. "From: $visitor_email");

}

?>
