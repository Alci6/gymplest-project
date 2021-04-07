<script>
	import Navbar from './../molecules/Navbar.svelte';
	import Form from './../molecules/Form.svelte';
</script>

<main class="head shadow-5">
	
	<Navbar />
	<Form />
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
	background-image: 100%;
	padding-bottom: 15%;
	}

</style>
