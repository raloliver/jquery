<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Prática!</title>
	<!-- chamada -->
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/305.js"></script>
	<link rel="stylesheet" type="text/css" href="css/305.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="span12 loading">
				<img src="img/load.gif" height="16" width="16" alt="Loading..." title="Loading..." class="img-polaroid">Loading...
			</div>	
			<div class="span12">				
		      <form class="form-signin" action="" method="post">
		      	<?php 
					if (!empty($_POST)) {
						echo '<pre>';
							print_r($_POST);
						echo '</pre>';
					}
				 ?>
		        <h2 class="form-signin-heading">Please sign in</h2>
		        <label class="label label-info">Email:</label>
		        <input type="text" class="input-block-level" name="email" id="focusedInput">
		        <p class="alert alert-danger email"><strong>Aviso!</strong> Email errado!</p>
		        <label class="label label-info">Password:</label>
		        <input type="password" class="input-block-level" name="password">
		        <p class="alert alert-danger senha"><strong>Aviso!</strong> Senha errada!</p>
		        <button class="btn btn-large btn-primary" type="submit">Sign in</button>
		      </form>
	      </div>
      </div>
    </div>

	<img src="http://lorempixel.com/1920/1080/abstract" alt="Sample" style="display: none;">
</body>
</html>