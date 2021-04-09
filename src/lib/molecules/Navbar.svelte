<script>
	import Button from './../atoms/Button.svelte';
</script>

<nav class="dt w-100 border-box pa3 ph5-ns ">
	<div class="dtc v-mid mid-gray link dim w-25" title="Home">
		<img src="img/gymplest logo.svg" class="dib" alt="Site Name" />
	</div>
	<div class="dtc v-mid w-75 tr noselect ">
		<a class="link underline-hover white f6  f5-l  dib mr3 mr4-ns lh-copy" href="#information" title="más información">

			¿En que consiste?
		</a>
			<a class="ma0 pa0 link white" href="#formulario"> 
		<Button href="#formulario" type={'white-btn'} > 			
 ¡Apúntate! 
		</Button>
	</a>
	</div>
</nav>

