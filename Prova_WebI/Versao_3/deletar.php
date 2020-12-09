<?php
include 'conect.php';
try {

$sql = "DELETE FROM cliente WHERE id = '5' ";

 // Prepare statement
$stmt = $pdo->prepare($sql);
 // executa a  query
 $stmt->execute();
 header("location: index.html");

}
catch(PDOException $e)
{
 echo $sql . "<br>" . $e->getMessage();
}
$pdo = null;



?>