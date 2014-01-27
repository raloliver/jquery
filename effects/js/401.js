$(function(){
	var ex = $('.span12');

	// CLASSE INICIA OCULTA
	// $('.btn-danger').hide();
	// CLASSE OCULTA APOS ACAO
	$('.btn-danger').click(function(){
		// VARIACOES DENTRO DA FUNCAO: fast, slow, seconds
		ex.hide("slow");
	});

	// $('.btn-success').show("slow");
	$('.btn-success').click(function(){
		ex.show("fast")
	});

	// $('.btn-warning').toogle();
	$('.btn-warning').click(function(){
		ex.toggle(2000);
	});

	// DISPARAR EVENTOS A PARTIR DE TEXTO
	$(':text').keyup(function(){
		var value = $(this).val();
		if(value == 'hide'){
			ex.hide("slow");
		}else if(value == 'show'){
			ex.show("fast");
		}else if(value == 'toggle'){
			ex.toggle(2000);
		}else{
			ex.text(value);
		}
	});

});