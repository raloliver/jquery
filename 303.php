<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Eventos Teclado e Forms</title>
	<!-- chamada -->
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/303.js"></script>
	<link rel="stylesheet" type="text/css" href="css/303.css">
</head>
<body>
	<div class="container">
		E então, por onde você deseja começar?
	</div>

	<form action="" method="post">
		<label>
			<input type="text" name="nome" class="placeholder nome" title="Como você se chama?">
		</label>
		<label>
			<input type="text" name="idade" class="placeholder idade" title="Quantos anos você tem?">
		</label>
		<label>
			<textarea name="texto" rows="3" class="placeholder keypress" title="Então, quais as suas metas?"></textarea>
		</label>
		<input type="button" value="Botão">
		<input type="submit" value="Enviar">
	</form>
</body>
</html>