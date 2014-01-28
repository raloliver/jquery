$(function(){
	var input = $(':button');
	var ex = $('span');
	/*
	// UM CLICK SOME, DOIS CLICKS VOLTA
	input.click(function(){
		$('.btn-success').fadeOut("slow");
	}).dblclick(function(){
		$('.btn-success').fadeIn("fast");
	});
	*/

	/*
	// fadeTo: OPACIDADE DO ELEMENTO
	input.click(function(){
		ex.fadeTo("slow",0.7)
	}).dblclick(function(){
		ex.fadeTo("slow",1.0)
	});
	*/

	/*
	// fadeToggle: EXIBE COM OPACIDADE
	input.click(function(){
		ex.fadeToggle(1000);
	});
	*/

	// E POSSIVEL FAZER UM EFEITO ACONTENCER A PARTIR DE OUTRO UTILIZANDO O CALLBACK
	input.click(function(){
		$('.btn-success').fadeTo(3000,0.3,function(){
			$('.btn-info').fadeTo("slow",0.1);
		});		
	});
});