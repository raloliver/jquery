$(function(){
	// VARIÁVEIS DE SELEÇÃO
	// VARIAVEL PARA CONTAR QUANTAS VEZES A ACAO FOI DISPARADA DENTRO DO CAMPO
	var count = 0;
	// VARIAVEL PARA INSTANCIAR A DIV CONTAINER
	var ex = $('.container');
	// PODEMOS TAMBEM CRIAR FUNCOES COMO EM PHP
	function rows (){
		count ++;
		ex.text($(this).val() + ' - ( '+count+' )');
	}

	function write (){
		ex.text($($this).val());
	}

	function focus (){
		ex.text('Focando...');
	}

	function blur (){
		ex.text('Saindo...');
	}

	$('.input').bind({
		keyup: write,
		focus: focus,
		blur: blur,
		mouseover: rows
	});

	// ENCADEANDO COMO NO EXEMPLO DE APLICACAO COM CSS
	/*
	$('input').bind({
		keyup: rows,
		focus: function(){
			ex.text('Focando Área')
		},
		blur: function(){
			ex.text('Desfoque Área')
		}	
	});
	*/
	/*
	// BIND and UNBID
	// $('.input').keyup(rows);
	$('.input').bind('focus keyup mouseover', rows);
	// APLICACAO DO UNBIND
	$('.input').bind('focus keyup mouseover', function(){
			
		$(this).after(count+'<br>');

		if(count >= 10){
			// AQUI DESASSOCIAMOS TODOS
			// $(this).unbind();
			// AQUI DESASSOCIAMOS CADA ACAO
			// $(this).unbind('focus mouseover');
			// AGORA DESASSOCIAMOS DE UMA FUNCAO
			$(this).unbind('focus mouseover', rows);

		}
	});
	*/

	// PARA DISPARAR OS MESMOS EVENTOS DO CODIGO ABAIXO, POREM ESCREVER MENOS, USAMOS O BIND
	/*
	$('.input').bind('focus keyup mouseover', function(){
		count ++;
		ex.text($(this).val() + ' - ( '+count+' )');
	});
	*/

	/*
	$('.input').focus(function(){
		count ++;
		// AQUI CONTAMOS DE FATO QUANTAS VEZES EXECUTAMOS A FUNCAO COUNT DENTRO DO CAMPO
		ex.text($(this).val() + ' - ( '+count+' )');
	}).keyup(function(){
		count ++;
		ex.text($(this).val() + ' - ( '+count+' )');
	}).mouseover(function(){
		count ++;
		ex.text($(this).val() + ' - ( '+count+' )');
	});
	*/
});
