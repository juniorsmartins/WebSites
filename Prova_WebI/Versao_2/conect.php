<?php
  	try {
       $host = "database-1.csjo8phyf7yn.us-east-1.rds.amazonaws.com";
       $usuario = "root";
       $senha = "2020senaimt";
       $nome_banco = "ads_2020";

$pdo = new PDO("mysql:host=".$host.";dbname=".$nome_banco."", $usuario, $senha);

$pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      echo 'conectado';
  	} catch (Exception $e) {
  		    echo '<div class="alert alert-danger">
                      <button type="button" class="close" data-dismiss="alert">×</button>
                      <strong>Servidor fora do ar!</strong> !
                      </div>; ' ;
  	}
  ?>