<?php

$filename = "outputs/" . $_POST["postid"].".txt";

echo $filename
$myfile = fopen($filename, "a+") or die("couldn't open"); 
//fwrite($myfile, $_POST["firstname"]);
//fwrite($myfile, $_POST["lastname"]);
fwrite($myfile, $_POST["data"]);
fwrite($myfile, "\nEOF");
fclose($myfile); 

echo "it works";
?>
