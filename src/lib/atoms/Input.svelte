<script>
	export let placeholder = '';
	export let value = ""; 
</script>

<input type='text' {placeholder} bind:value="{value}" />
<style>
	input {
		height: 3rem;
		font-size: 1.3rem;
		width: 90%;
		padding-left: 0.5rem;
	}
</style>
