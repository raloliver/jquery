$(function(){
	// VARIAVEL PARA SER UTILIZADA EM TODAS AS EXECUCOES, POR ISSO ELA FICA FORA DA SELACAO PARA QUE ELA SEJA VALIDA PARA TODOS OS SELETORES
	var all = $ ('.container');
	$('.text').click(function(){		
		$(this).css("background","#ccc");
		all.text("Selecionado!");
	});

	$('.text_a').dblclick(function(){
		$(this).css("background","#ccc");
		all.text("Deselecionado!");
	});
	// EVENTO DE FOCUS: CLICOU NO CAMPO, ACAO DEVE OCORRER
	$('.focus').focusin(function(){
		$(this).css("background","green");
		all.text("Escreva algo!");
	}).focusout(function(){
		$(this).css("background","#ccc");
		all.text("Não vai escrever?");
	});
	// EVENTO DE MOUSE PASSANDO
	$('.text_b').hover(function(){
		$(this).css("background","red");
		all.text("Opa, cuidado!");
	});

	// EVENTO AO PRECIONAR E AO SOLTAR O BOTAO
	$('.text_c').mousedown(function(){
		$(this).css("background","orange");
		all.text("Botão Pressionado!");
	}).mouseup(function(){
		$(this).css("background","green");
		all.text("Botão Solto!");
	});
	
	// EVENTO AO MOUSE ENTRAR NA AREA
	// AQUI IREMOS VERIFICAR QUANTAS VEZES O ELEMENTO FOI ACESSADO
	var enter = 0;
	$('.text_d').mouseenter(function(){
		enter += 1;
		all.text("Mouse Dentro:"+enter);
	}).mouseout(function(){
		$(this).css("background","green");
		all.text("Mouse Fora");
	});
	// NESTE CASO ELE SOMA AO PASSAR O MOUSE INDEPENDENTE DO ELEMENTO, NO NOSSO EXEMPLO O SPAN
	var over = 0;
	$('.text_e').mouseover(function(){
		over += 1;
		all.text("Mouse Passando:"+over);
	}).mouseleave(function(){
		$(this).css("background","#069");
		all.text("Mouse Fora");
	});
	// MOVIMENTACAO DO MOUSE (ONDE ESTA O MOUSE?)
	$('.text_f').mousemove(function(move){
		// E NECESSARIO CRIAR VARIAVEIS PARA SABER ONDE O MOUSE ESTA
		var localx = move.pageX;
		var localy = move.pageY;
		$(this).css("background","#069");
		all.text("Local X: "+localx+" - Local Y: "+localy);
	});
});