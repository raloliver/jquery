$(function(){
	var action = $(':button[value="Action"]');
	var verify = $(':button[value="Verify"]');
	var sample = $('span');

	// SLIDEUP: OCULTA O ELEMENTO DA PAGINA, SLIDEDOWN: APRESENTA
	/*
	action.click(function(){
		sample.slideUp("slow");
	})
	.dblclick(function(){
		sample.slideDown("fast");
	});
	*/
	// PRIMEIRO CLIQUE: OCULTA SEGUNDO CLICK: APRESENTA

	action.click(function(){
		sample.slideToggle(1500);
	});

	// VERIFICAR SE ELEMENTO ESTA OCULTO OU NAO (IS)
	verify.click(function(){
		if (sample.is(':visible')) {
			$('.container').append('<p class="text-success">Visible!</p>')
		}else if(sample.is(':hidden')){
			$('.container').append('<p class="text-error">Disable!</p>')
		}
		// OCULTAR OS OUTROS ELEMENTOS DEPOIS QUE EXECUTAR A ACAO
		$('p').delay(2500).slideUp("fast");
	});
});