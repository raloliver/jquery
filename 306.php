<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Campos Dinâmicos!</title>
	<!-- chamada -->
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/306.js"></script>
	<link rel="stylesheet" type="text/css" href="css/306.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<div class="row">
		<div class="span12 pre">
			DEBUG
			<?php 
			if (!empty($_POST)) {
				echo '<pre>';
					print_r($_POST);
				echo '</pre>';
			};?>	
		</div>

			<div class="span12">
				<form class="form-horizontal" action="" method="post" name="campos_dinamicos">
					<fieldset>
						<legend>Funções e Campos Dinâmicos</legend>
						<div class="control-group">
							<label class="control-label" for="nome">Nome</label>
							<div class="controls">
								<input type="text" class="input-xlarge" name="texto[]">
							</div>
						</div>
						<div class="control-group">
							<div class="controls fields">

							</div>
						</div>
						<div class="form-actions">
							<input type="button" class="btn btn-primary" value="Action">
							<input type="button" class="btn btn-success" value="+">
							<input type="button" class="btn btn-warning" value="&">
							<input type="button" class="btn btn-danger" value="X">
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
</body>
</html>