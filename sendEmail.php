<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

ini_set('display_errors', 1);
if(isset($_GET['send'])) {

  $postdata = file_get_contents("php://input");
  $decode = json_decode($postdata,true);

  $name =$decode['name'];
  $phone =$decode['phone'];
  $email =$decode['email'];
  $message=$decode['message'];

  	//define case ID
  	$caseNr = "Case:#".substr(uniqid(),-5);

  $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
  try {


  	//require_once 'emailConfig.php';

      //Server settings
    //$mail->SMTPDebug = 2;                                 // Enable verbose debug output
      $mail->isSMTP();                                      // Set mailer to use SMTP
      $mail->Host = 'mail.privateemail.com';  // Specify main and backup SMTP servers
      $mail->SMTPAuth = true;                               // Enable SMTP authentication
      $mail->Username = 'info@insuitlabs.ch';                 // SMTP username
      $mail->Password = 'nedimdauti007';                           // SMTP password
      $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
      $mail->Port = 465;                                    // TCP port to connect to



      //Recipients
      $mail->setFrom('info@insuitlabs.ch', 'InSuit, web contact');
      $mail->addAddress('info@insuitlabs.ch');     // Add a recipient
      //$mail->addAddress('cameradulce@gmail.com');               // Name is optional
      //$mail->addAddress('samjohnsones@gmail.com');

      $mail->addReplyTo($email, $caseNr);
      //$mail->addCC('cc@example.com');
      //$mail->addBCC('bcc@example.com');

      //Attachments

    //  $mail->addStringAttachment($pdfFile,$filename.'.pdf');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

      //Content
      $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = "InSuit_Labs, new message from ".$name;
      $mail->Body    =  "Name: ".$name. "; <br />Email: ".$email."; <br />Phone: ".$phone."; <br />Message:<br />".$message;
      $mail->AltBody = '';

      $mail->send();
      //echo 'Message has been sent';

  } catch (Exception $e) {
    //  echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;

  }

}
 ?>
