<?php

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$seleccion = $_POST['seleccion'];
$mensaje = $_POST['mensaje'];



$destinatario = "maicale64@gmail.com";
$asunto = "Contacto desde pagina web";

$carta = "De: $nombre \n";
$carta.="Telefono: $telefono \n";
$carta .="Correo: $correo \n";
$carta .="Asunto: $seleccion \n";
$carta .="Mensaje: $mensaje";

mail($destinatario, $asunto, $carta);

?>
