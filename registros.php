<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<?php 

include("db_con.php");

if (isset($_POST['enviar'])) {
     
	    $nombre = trim($_POST['nombre']);
	    $telefono= trim($_POST['telefono']);
		$correo= trim($_POST['correo']);

		$statement =$conexion->prepare("INSERT INTO datos(nombre,telefono,correo) VALUES (:nombre,:telefono,:correo);");
		$statement->bindParam(':nombre',$nombre);
		$statement->bindParam(':telefono',$telefono);
		$statement->bindParam(':correo',$correo);
		$statement->execute();
		if($statement){
			
?>
		<script type="text/javascript">
window.location="http://localhost/ejercicio/soap.php";
</script>

<?php 			
			
			 
	      
			
			}else{
				echo"error";
			}
} 

  

?>

