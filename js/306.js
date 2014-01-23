$(function(){
	// TRIGGERS
	var ex = $('.pre'); 

	$(':text').click(function(){
	// COLETAR O TEXTO E ENVIAR PARA O DEBUG; AO DIGITA NADA ACONTECE, APENAS CLICAR ELE MOSTRA
		var texto = $(this).val();
		ex.text(texto);
	});
	// AO CARREGAR NO INPUT, DEVE ESCREVER O QUE ESTA NO MESMO DE IMEDIATO
		// $(':text').trigger('focusin');
		$('.btn-primary').click(function(){
			$(':text').trigger('click');
			$('form[name="campos_dinamicos"').submit();
		});	


	// INCLUSAO DE CAMPOS DINAMICAMENTE
	// APPEND(ADICIONAR A DIV SELECIONADA), PREPEND (ADICIONAR ANTES DA DIV SELECIONA)
	// $('.fields').append('Teste');
	$('.btn-success').click(function(){
		$('.fields').append('<input type="text" class="input-xlarge" id="input01" name="texto[]">');
	});

	$('.btn-warning').click(function(){
		$('.fields').prepend('<input type="file" class="input-xlarge file" name="img[]" multiple="multiple">');
		// OCULTAR BOTAO DE ADICIONAR MAIS ARQUIVOS
		$(this).unbind('click').fadeOut("slow");
	});

	// ACAO PARA LIMPAR
	$('.btn-danger').click(function(){
		$('pre').fadeOut();
	});
});

