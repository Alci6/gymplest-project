<script>

	import {Parallax, ParallaxLayer} from "svelte-parallax";
	import Navbar from './../molecules/Navbar.svelte';
	import Form from './../molecules/Form.svelte';

	export let screenIsBig = false; 
</script>


<main class="head shadow-5">

	{#if screenIsBig}

			<Navbar />
	<Parallax sections={1.35}> 
		<ParallaxLayer rate={-0.5} offset={-0.5}>
			<Form />
 	 </ParallaxLayer>


	</Parallax>	

{:else}

			<Navbar />
			<div class="pa3">
				

			<Form />
			</div>




{/if}

</main>
<style>



.head{
  background-color: #282F31; 
	background-image: url('/img/background.jpg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
	background-repeat: no-repeat;
	height:100vh;width:100vw
	}

</style>
