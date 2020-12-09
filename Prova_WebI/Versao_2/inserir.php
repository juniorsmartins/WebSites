<?php
include 'conect.php';
// Altere as variáveis  aqui

$modelo = $_POST["modelo"];
$marca = $_POST["marca"];
$ano = $_POST["ano"];

$consulta = "INSERT INTO veiculo(marca, modelo, ano) "."
 VALUES('".$marca."' ,'".$modelo." ', '".$ano."' ) ";

try{
 $ins = $pdo->prepare($consulta);
 $ins->execute();
 echo '<div class=" text-center alert alert-default">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>OK</strong> Veículo cadastrado com sucesso!
        </div>';
 }catch (Exception $e){
            echo $e->getMessage();
 }


?>