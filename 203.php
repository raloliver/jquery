<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Seletores Hierárquicos</title>
	<!-- chamada -->
	<script type="text/javascript" src="js/jquery.js"></script>
	<!-- manipulacao -->
	<script type="text/javascript">
		$(function(){
			$('h2').css('margin','0');
			$('p').css({
				margin:'0',
				color: 'orange'
			});
			$('.container').css({
				// caso o seletor seja composto, devemos utilizar aspas simples
				'margin-bottom': '20px',
				background: '#ccc',
				color: '#666'
			});
			// elementos dentro da div
			$('.container span').hide().delay('1000').fadeIn(1000).css('color','red');
			$('.container h2').hide().css('font-size','49px').fadeIn(800);
			// elementos dentro da div, primeira camada (>)
			$('.container > span').css('color','blue');
			// primeiro elemento apos o selecionado (+)
			$('.text-left + p').css('font-size','33px');
			// neste exemplo, atacamos todos depois do selecionado (~)
			$('.text-left ~ p').css('color','purple');
			// mais sobre hierarquia: http://api.jquery.com/category/selectors/hierarchy-selectors/
		});
	</script>
</head>
<body>
<div class="container">
	<h2>Título 2 Dentro</h2>
	<p>Parágrafo Dentro <span>Span no P</span></p>
	<span>Span Dentro</span>
</div>
<h2>Título 2 Fora</h2>
<p class="text-left">P1 Fora</p>
<p class="text-right">P2 Fora</p>
<p class="text-center">P3 Fora</p>
</body>
</html>