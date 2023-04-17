<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // Collect form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Validate form data
  if (!empty($name) && !empty($email) && !empty($message)) {

    // Prepare email message
    $to = 'gamechanger.com.np@gmail.com';
    $subject = 'CEE Medical GameChanger Inquiry';
    $body = "Name: $name\nEmail: $email\n\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
      echo 'Thank you for your inquiry!';
    } else {
      echo 'There was a problem sending your inquiry. Please try again later.';
    }

  } else {
    echo 'Please fill in all fields.';
  }

}

?>
