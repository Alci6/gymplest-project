<script>
	import Head from "./../organisms/Head.svelte"; 
	import Center from "./../organisms/Center.svelte";
	import Footer from "./../organisms/Footer.svelte"; 

	const screenIsBig = () => {
		return window.screen.availWidth > 830 ? true : false
	};   

</script>

<main>
	<Head screenIsBig={screenIsBig()} />
	<Center/>
	<Footer/>		
</main>
