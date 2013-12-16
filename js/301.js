$(function(){

	/***IDENTIFICACAO/TROCA DE IMAGEM INEXISTENTE***/
	// AQUI TROCAMOS TODAS AS IMAGENS
	// $('img').attr("src","img/error.jpg");
	
	// EH POSSIVEL CRIAR VARIAVEIS DENTRO DA FUNCAO
		/*$('img').error(function(){		
			var imagem = $(this).attr("src");
			alert('Imagem '+imagem+' Inexistente!');
			$(this).attr("src","img/error.jpg");*/
	// AQUI DETERMINO APENAS CASO A IMAGEM NAO EXISTA
		// $('img').attr("src","img/error.jpg");
	// });
	
	/***REDIMENSIONAR IMAGEM (recuperar e aplicar valores as imagens)***/
	// AQUI PODEMOS REDIMENSIONAR BASEADO NO TAMANHO DA JANELA
	// $('img').width($(window).width()).height($(window).height());
	// REMOVER BORDAS
	// $('body').css({overflow:'hidden',margin:'0'});
	// COMO UTILIZAR O RESIZE DE MANEIRA AUTOMATICA
	/*$(window).resize(function(){
		$('img').width($(window).width()).height($(window).height());
	});*/

	/***SCROLL***/
	/*$(window).scroll(function(){
		$('body').css("background",'#069');
		$('img').fadeOut('1000');
	});*/
	// AO CHEGAR EM DETERMINADO PONTO, FAÇA ISSO

	$(window).scroll(function(){
		var topo = $(window).scrollTop();
		if(topo > 300){
			$('body').css("background",'#069');
			$('img').fadeOut('1000');
		} else {
			$('body').css("background",'#fff');
			$('img').fadeIn('1000');
		}
	});
	
});