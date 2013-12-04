<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Criação de Seletores</title>
	<!-- chamada -->
	<script type="text/javascript" src="js/jquery.js"></script>
	<!-- manipulacao -->
	<script type="text/javascript">
		$(function(){
			// SELETORES PERSONALIZADOS
			$('.active').css('background','#666');
		});
	</script>
</head>
<body>
	<ul id="nav">
		<li class="item1"><a href="#">item 1</a></li>
		<li class="item2"><a href="#">item 2</a></li>
		<li class="item3"><a href="#">item 3</a></li>
		<li class="item4"><a href="#">item 4</a></li>
		<li class="active"><a href="#">item 5</a></li>
		<li class="item6"><a href="#">item 6</a></li>
	</ul>
</body>
</html>