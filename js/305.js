$(function(){
	// AO CARREGAR O DOM, O FORM DEVE SUMIR
	$('.form-signin').css('display','none');
	$('.alert-danger').css('display','none');
	// VALIDAR EMAIL COM EXPRESSÃO REGULAR, A MESMA UTILIZADA NO PHP
	var regular = /[a-z0-9_\.\-]+@[a-z0-9_\.\-]*[a-z0-9_\.\-]+\.[a-z]{2,4}$/;

	// DISPARAR EVENTOS E EFETUAS VALIDAÇÕES
	// CLICK
	$('.btn').click(function(){
		var email = $('input[name=email]').val();
		var password = $('input[name=password]').val();
		$('.alert-danger').fadeOut('fast');
		// VALIDAÇÃO DE EMAIL
		if (email == '') {
			$('.email').fadeIn("fast").text('Informe seu email.');
		}else if (!regular.test(email)) {
			$('.email').fadeIn("fast").text('Email incorreto!');
		}else if (password == '') {
			$('.senha').fadeIn("fast").text('Informe sua senha.');
		}else if (password.length < 6 || password.length > 12) {
			$('.senha').fadeIn("fast").text('Senha deve ter em 6 e 12!');
		}else {
			$('input[name=email]').css('border-color','#468847');
			$('input[name=password]').css('border-color','#468847');
			return true;
		}
		return false;
	});

	// BLUR (VALIDA EMAIL)
	$('input[name=email]').blur(function(){
		var email = $('input[name=email]').val();
		$('.alert-danger').fadeOut('fast');
		// VALIDAÇÃO DE EMAIL
		if (email == '') {
			$('.email').fadeIn("fast").text('Informe seu email.');
		}else if (!regular.test(email)) {
			$('.email').fadeIn("fast").text('Email incorreto!');
		}else {
			$('input[name=email]').css('border-color','#468847');
		}
	});	
	// BLUR (VALIDA SENHA)
	$('input[name=password]').blur(function(){
		var password = $('input[name=password]').val();
		$('.alert-danger').fadeOut('fast');
		// VALIDAÇÃO DE SENHA
		if (password == '') {
			$('.senha').fadeIn("fast").text('Informe sua senha.');
		}else if (password.length < 6 || password.length > 12) {
			$('.senha').fadeIn("fast").text('Senha deve ter em 6 e 12!');
		}else {
			$('input[name=password]').css('border-color','#468847');
			return true;
		}
	});
});
	// APOS CARREGAR TODOS OS ELEMENTOS (DOM) CARREGAR O FORM
$(window).load(function(){
	$('.loading').fadeOut("slow", function(){
		$('.form-signin').fadeIn("slow");
	});
});

