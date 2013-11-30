<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Seletores de Atributos</title>
	<!-- chamada -->
	<script type="text/javascript" src="js/jquery.js"></script>
	<!-- manipulacao -->
	<script type="text/javascript">
		$(function(){
			// CONTEM O ATRIBUTO
			$('a[rel]').css({display:'block', margin: '0 0 10px'});
			$('a[href]').css('color', '#666');

			// VALOR DO ATRIBUTO E IGUAL
			$('a[href="#"]').css('font-size', '30px')

			// CONTEM O VALOR DO ATRIBUTO
			$('a[href*="lk"]').css('font-size', '50px')

			// NAO CONTEM O VALOR DO ATRIBUTO
			$('a[rel!="lk1"]').css('color', '#f30')

			// CONTEM O VALOR DO ATRIBUTO
			$('a[title*="Menu"]').css('color', '#069')
			$('a[title*="Menu"]').click(function(){
				alert('Estes são os seletores de atributos!');
			});
		});
	</script>
</head>
<body>
	<a href="#" rel="lk1">Link 1</a>
	<a href="#" rel="lk2">Link 2</a>
	<a href="#lk" rel="lk3" title="Menu Link">Link 3</a>
</body>
</html>