<?php

//get data from form  

// $name = $_POST['name'];
// $email= $_POST['email'];
// $message= $_POST['message'];

// $to = "tadas.zvinklys@gmail.com";
// $subject = "Mail From website";
// $txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
// $headers = "From: noreply@yoursite.com" . "\r\n" .
// "CC: somebodyelse@example.com";
// if($email!=NULL){
//     mail($to,$subject,$txt,$headers);
// }
// //redirect
// //header("Location:thankyou.html");
// 

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "tadas.zvinklys@gmail.com";
    $headers = "From: ".$email;
    $txt = "You have received email from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
}

?>