<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
 <div class="container">
        <div class="row">
            <h1>Listar Cliente</h1>
        </div>
 <div class="row">  
<table class="table">
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Sobrenome</td>
                    <td>CPF</td>
 </tr>  
<?php 
include 'conect.php';

 // SUA CONSULTA DEVE SER REALIZADA AQUI
// ALTERE PARA O NOME DA SUA TABELA
 $consulta = "Select * from CLIENTE";

//VOCÊ DEVE TROCAR SOMENTE O NOME DAS COLUNAS DA TABELA IGUAL ESTÁ ESCRITO AQUI

 try {
 $stmt = $pdo->prepare($consulta);
     if ($stmt->execute()) { 
         while ($rs = $stmt->fetch(PDO::FETCH_OBJ)) {
                 
                    echo "<tr>";
                    echo "<td>".$rs->id."</td><td>".$rs->nome."</td>
                    <td>".$rs->sobrenome."</td><td>".$rs->cpf."</td>";
					echo "</tr>";
                }
            } else {
                echo "Erro: Não foi possível recuperar os dados do banco de dados";
            }
        } catch (PDOException $erro) {
            echo "Erro: ".$erro->getMessage();
        }

?>
 </table>
        </div>

    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
</body>
</html>