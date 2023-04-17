<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Email address to send the form data to
    $to = "gamechanger.com.np@gmail.com";

    // Email subject
    $subject = "CEE Paramedical GameChanger Contact Form Submission";

    // Email message body
    $body = "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Phone: " . $phone . "\n\n";
    $body .= "Message:\n" . $message;

    // Additional headers
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Send the email using PHP's mail() function
    if (mail($to, $subject, $body, $headers)) {
        // If the email was sent successfully, redirect to a success page
        header("Location: cee-paramedical.html");
        exit();
    } else {
        // If the email failed to send, display an error message
        echo "There was a problem sending your message. Please try again later.";
    }
}
?>
