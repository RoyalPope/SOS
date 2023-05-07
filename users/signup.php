<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="POST" autocomplete="off">
    <h1>register here!!!</h1>
    <label for="t">username:</label> 
    <input type="text" placeholder="enter username" name="a" id="t" required><br><br>

    <label for="tt">password:</label> 
    <input type="password" placeholder="enter password" id="tt" maxlength="8" name="b" required><br><br>
    <button type="submit" name="btn">log in</button>
</form>
<?php
if(isset($_POST['btn'])){
    $aa=$_POST['a'];
    $bb=$_POST['b'];
    include"connect.php";
    $query=mysqli_query($conn,"insert into admin values('','$aa','$bb')");
    if($query){
        echo "<script>alert('hello there.!')</script>";
    }
    else{
        echo "<script>alert('incorrect')</script>";
    }
}
?>

</body>
</html>