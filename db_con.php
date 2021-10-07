<?php

try{
	$conexion=new PDO('mysql:host=localhost;dbname=registros','root',''); 
}catch(PDOException $e){
	//Mostrar Error
	echo "Error: " . $e->getMessage();
}


?>