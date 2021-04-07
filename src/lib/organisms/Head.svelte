<script>

	import {Parallax, ParallaxLayer} from "svelte-parallax";
	import Navbar from './../molecules/Navbar.svelte';
	import Form from './../molecules/Form.svelte';

	export let screenIsBig = false; 
</script>


{#if screenIsBig}



	<Parallax sections={1.5}> 
<main class="head shadow-5">
			<Navbar />
		<ParallaxLayer rate={-0.5} offset={-0.5}>
			<Form />
 	 </ParallaxLayer>

</main>

	</Parallax>	

{:else}

<main class="head shadow-5">
			<Navbar />
			<Form />

</main>



{/if}

<style>



.head{
  background-color: #282F31; 
	background-image: url('/img/background.jpg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
	background-repeat: no-repeat;
	background-image: 100%;
	padding-bottom: 15%;
	height: 75%;


	}

</style>
