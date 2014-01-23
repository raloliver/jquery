$(function(){
	
	var count = 0;
	/*
	$('p').click(function(){
		count ++;
		$('.span12').append('<p>Clique Novamente: '+count+'</p>');
	});
	*/

	// ON: ATRIBIU EVENTOS AOS ELEMENTOS
	// NESTE CASO, APOS O EVENTO, SELECIONAMOS ONDE IREMOS CLICAR PARA QUE O MESMO SEJA EXECUTADO
	/*
	$('.row').on('click','p',function(){
		count ++;
		$('.span12').append('<p>Clique Novamente: '+count+'</p>');
		// OFF
		if(count >= 3){
			$('.row').off('click','p');
		}
	});
	*/

	// ALERTA AO CLICAR
	/*
	$('p').click(function(){

		alert('Clicado!');
	});
	
	// ONE: EXIBE O ALERTA APENAS A PRIMEIRA VEZ QUE FOI CLICADO, DEPOIS NAO
	$('p').one('click',function(){
		alert('Clicou!');
	});
	*/

	$('.row').on({
		click: function(){
			$('.span12').append('<p>Clique Novamente.</p>');		
		},
		mouseover: function(){
			$('.span12').append('<p>Passe o Mouse.</p>');		
		}
	// AQUI INFORMAMOS O P PARA EXECUTAR A ACAO APENAS NO PARAGRAFO
	},'p');

});

