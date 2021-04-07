<script>
	export let type = 'white-btn';
	export let onClick = () => {console.log('clicked')};
</script>

<p class="noselect link dim  f6  f5-l  dib lh-copy ba pa2 {type}" on:click="{onClick}" href="3" title="text">
	<slot />
</p>

<style>
	.white-btn {
		border-color: white;
		color: white;
		border-radius: 9999px;
	}

	.orange-btn {
		color: white;
		background-color: #fe6f61;
		padding-left: 1rem;
		padding-right: 1rem;
		font-family: Roboto;
	}
</style>
