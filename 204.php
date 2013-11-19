<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Seletores Formulários</title>
	<!-- chamada -->
	<script type="text/javascript" src="js/jquery.js"></script>
	<!-- manipulacao -->
	<script type="text/javascript">
		$(function(){
			$('form')
				.hide()
				.css({
					padding: '10px',
					background: '#fbfbfb',
					width: '500px',
					height: '500px',
					position: 'fixed',
					left: '50%',
					top: '50%',
					'margin-left': '-250px',
					'margin-top': '-250px'
					})
				.fadeIn(2000);

			$('label').css({
				display: 'block',
				'margin-bottom': '10px'				
			});

			$('.control-label').css({
				'font-family': '"Helvetica", sans-serif',
				'font-weight': 'bold'
			});

			$('form :text, form :password').css({
				display: 'block',
				'margin-bottom': '10px',
				padding: '5px',
				background: 'gray',
				border: '0',
				width: '490px',
				color: '#fff'
			});

			$('form :text').hide().delay(500).fadeIn("slow");
			$('form :password').hide().delay(1000).fadeIn("slow");
			$('form :checkbox').hide().delay(1500).fadeIn("slow");
			$('form :radio').hide().delay(2000).fadeIn("slow");
			$('form :file').hide().delay(2500).fadeIn("slow");
			$('form :submit, form :reset').hide().delay(3000).fadeIn("slow");
			$('form #select01').hide().delay(3500).fadeIn("slow");
			$('form :image').hide().delay(4000).fadeIn("slow");
			$('form :disabled').val('Não é possível editar!');

			$('form :reset').click(function(){
				$('form').slideUp(2000);
			});
			// mais sobre outros seletores de formulários: http://api.jquery.com/category/selectors/form-selectors/
		});
	</script>
</head>
<body>
<form name="form" action="" method="post" class="form-horizontal">
	<fieldset>
		<legend>Seletores Formulários</legend>
		<div class="control-group">
			<label class="control-label" for="input01">Text input</label>
			<div class="controls">
				<input type="text" class="input-xlarge" id="input01" disabled="disabled">
			</div>
			<label class="control-label" for="input02">Pass input</label>
			<div class="controls">
				<input type="password" class="input-xlarge" id="input02">
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">Checkbox</label>
			<div class="controls">
				<label class="checkbox" for="checkbox">
					<input type="checkbox" checked="checked" value="1">Check 1
					<input type="checkbox" value="2">Check 2
				</label>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">Radiobox</label>
			<div class="controls">
				<label class="radiobox" for="radio">
					<input type="radio" checked="checked" name="radio" value="1">Radio 1
					<input type="radio" name="radio" value="2">Radio 2
				</label>
			</div>
		</div>		
		<div class="control-group">
			<label class="control-label" for="fileInput">File input</label>
			<div class="controls">
				<input class="input-file" id="fileInput" type="file">
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">Image</label>
			<div class="controls">
				<input class="input-file" id="image" type="image" src="http://placehold.it/180x50">
			</div>
		</div>
		<!-- <div class="control-group">
			<label class="control-label" for="textarea">Textarea</label>
			<div class="controls">
				<textarea class="input-xlarge" id="textarea" rows="3"></textarea>
			</div>
		</div> -->
		<div class="form-actions">
			<button type="submit" class="btn btn-primary">Save changes</button>
			<button type="reset" class="btn">Cancel</button>
		</div>
		<div class="control-group">
			<label class="control-label" for="select01">Select list</label>
			<div class="controls">
				<select id="select01">
					<option>something</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</div>
		</div>
	</fieldset>
</form>
</body>
</html>