<script>

	import Form from './../molecules/Form.svelte';

</script>

<style>
	.pattern{
	background-color: black; 
	background-image: url(/img/pattern.svg);
	
	}
		
</style>

<div class=" pa3 pattern" id="formulario">
	<div class=" center mw6 ">
			<Form placeholderEmail="pau.gasol@hotmail.com" placeholderPostalCode="28050" title={"¡Apúntate ya a la beta privada!"} />
	</div>		
</div>



