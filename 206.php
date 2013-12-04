<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Filtros de Conteúdo</title>
	<!-- chamada -->
	<script type="text/javascript" src="js/jquery.js"></script>
	<!-- manipulacao -->
	<script type="text/javascript">
		$(function(){
			// FILTROS POR PALAVRAS (contains)
			$('li:contains("Cursos")').css("background","#c33");
			// FILTROS DE ELEMENTO
			$('li:has("span")').css("background","#069");
			// FILTROS SEM CONTEUDO
			$('li:empty').css("background","green");
			// FILTROS COM CONTEUDO
			//$('li:not(li:empty)').css("border","3px solid #333");
			// AO INVES DE :not POSSO USAR O :parent
			$('li:parent').css("border","3px solid #ccc");
		});
	</script>
</head>
<body>
	<ul>
		<li>Cursos e Vídeos</li>
		<li></li>
		<li>Conheça <span>Nossos</span> Portal</li>
		<li></li>
		<li>Cursos Para Irmãos</li>
	</ul>
</body>
</html>