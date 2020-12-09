<?php
include 'conect.php';
// Altere as variáveis  aqui

$nome = $_POST["nome"];
$sobrenome = $_POST["sobrenome"];
$cpf = $_POST["cpf"];

$consulta = "INSERT INTO CLIENTE(nome, sobrenome, cpf) "."
 VALUES('".$nome."' ,'".$sobrenome." ', '".$cpf."' ) ";

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