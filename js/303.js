$(function(){
	// PLACEHOLDER DINAMICO PARA CROSSBROWSER COM FOCUSIN AND FOCUSOUT
	// A INTENCAO É CAPTURAR O VALOR DO TITLE E TRANSFORMAR EM PLACEHOLDER
	$('.placeholder').each(function(){
		// AQUI ARMAZENAMOS NUMA VARIAVEL O TITULO PARA TRANSFORMAR NO PLACEHOLDER
		var place = $(this).attr('title');
		// AQUI ARMAZENAMOS NUMA VARIAVEL O CAMPO
		var input = $(this);
		// AQUI PASSAMOS O VALOR DO TITULO PARA DENTRO DO VALOR DO CAMPO
		input
			.val(place)
			// AQUI INCLUÍMOS A FORMATACAO DO PLACEHOLDER
			.css('color','#ccc')
			// AQUI EXECUTAMOS O EVENTO PARA QUE A ACAO ACONTECA NO FOCUSIN
			.focusin(function(){
				input.css('color','#000');
				if(input.val() ==  place){
					input.val('');
				// APOS ISSO, DEVEMOS VERIFICAR SE O CAMPO ESTA VAZIO E VOLTAR A FORMATACAO ANTERIOR
				}
			}).focusout(function(){
				if(input.val() == ''){
					input.val(place);
					input.css('color','#ccc');
				}
			});
	});

	// AO DIGITAR OU FOCAR O EVENTO É DISPARADO
	var ex = $('.container');

	// O KEYPRESS NÃO É DISPARADO POR TODAS AS TECLAS O KEYDOWN SIM
	/*$('.keypress').keypress(function(){
		ex.text($(this).val());
	});*/
	/*$('.keypress').keydown(function(){
		ex.text($(this).val());
	});*/

	// O KEYUP ATUALIZA A AÇÃO AO SOLTAR A TECLA
	/*$('.keypress').keyup(function(){
		ex.text($(this).val());
	});*/

	// EVENTOS DE FORMULÁRIOS

	/* // AO FOCAR NO CAMPO, ELE EXIBE NO CONTAINER O TITLE DO MESMO
	$('.nome').focus(function(){
		ex.text($(this).attr('title'));
	// DAR FOCO EM OUTRO CAMPO QUANDO O ELEMENTO OU CONDIÇÃO FOR EXECUTADO NO CAMPO SELECIONADO
	}).keyup (function(){
	// QUANDO O VALOR DO CAMPO ACIMA FOR RAL OLIVER, PASSE PARA O CAMPO DOIS
		if($(this).val() == 'Ral Oliver'){
			$('.idade').focus();
		}
	});

	// EXEMPLO DE UTILIZAÇÃO DO BLUR
	$('.nome').blur(function(){
		ex.text('Não vai me dizer quem você é? '+$(this).attr('title'));
	}); */

	// EVENTO CHANGE: SÓ É DISPARADO NA TROCA DO CONTEÚDO, E NESSE MOMENTO PODE SER EXECUTADA UMA NOVA VERIFICAÇÃO
	// EXEMPLO NO USO DE LOGIN COM EMAIL, CASO O USUÁRIO ENTRE E NÃO ALTERE, NADA ACONTECE, PORÉM SE ALTERA DEVEMOS VERIFICAR NOVAMENTE
	$('.nome').change(function(){
		 ex.text('Quem está ai? É você '+$(this).val());
		 // AO TROCAR O VALOR DO CAMPO, PODEMOS TAMBÉM ENVIAR O FORMULÁRIO
		 //$('form').submit();
	});

	$(':button').click(function(){
		$('form').submit();
		// SELECIONAR CONTEÚDO DO ELEMENTO
		$('.nome').select();
	});

	// BLOQUEAR ENVIO DE FORMULARIO VIA HTTP
	$("form").submit(function(){
		// alert('Envio Bloqueado');
		return false;
	});


});