<?php
// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Validate the form data
  if (empty($name) || empty($email) || empty($message)) {
    echo 'Please fill out all fields';
    exit;
  }

  // Validate the email address
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Please enter a valid email address';
    exit;
  }

  // Prepare the email message
 $to = "gamechanger.com.np@gmail.com"; // Replace with desired email address
$subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  // Send the email
  if (mail($to, $subject, $body)) {
    echo 'Thank you for your message. We will get back to you as soon as possible.';
  } else {
    echo 'There was an error sending your message. Please try again later.';
  }

} else {
  // If the form hasn't been submitted, redirect to the homepage
  header('Location: index.php');
  exit;
}
?>
