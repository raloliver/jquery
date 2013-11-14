<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Seletores</title>
	<!-- chamada -->
	<script type="text/javascript" src="js/jquery.js"></script>
	<!-- manipulacao -->
	<script type="text/javascript">
		$(function(){
			/*
			$('h1').css("color","red");
			$('h1').hide();
			// neste caso, a proxima interacao demora 1s pra executar
			$('h1').delay('1000');
			$('h1').fadeIn("slow");
			$('h1').text('Brincando com jQuery');
			*/
			
			// conceito de encadeamento (unica linha)
			/*
			$('h1').css("color","green").hide().delay('1000').fadeIn("slow").text('Agora tudo junto!');
			*/

			// encadeamento em bloco
			/*			
			$('h1')
				.css("color","orange")
				.hide()
				.delay('1000')
				.fadeIn("slow")
				.text('Agora no blocão!');
			*/

			// encadeamento em camadas
			/*
			$('h1')
				.css("color","black")
				.hide()
				.delay('1000')
				.fadeIn("slow")
				.text('NÃO CLIQUE AQUI!')
				// evento: isso so vai acontencer ao clicar no elemento
					.click(function(){
						$('body').css("background","blue");
						$('h1').css("color","white")
					});
			*/

			// conceito de interacao (atacar varios elementos com uma instrucao simples)
			$('a').css({color: 'gray', display: 'block'});
			$('.span12').css ("color", "black");
			$('#container').css("color", "brown");
			$('*').css({margin: '0', padding: '10'});
			$('h1, #container').css("border-bottom","solid 3px green");

		});
	</script>
</head>
<body>
	<h1>Lógica jQuery</h1>
	<a href="#">Link 1</a>
	<a href="#" class="span12">Link 2</a>
	<a href="#" id="container">Link 3</a>
</body>
</html>