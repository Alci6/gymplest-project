<script>

	import Article from "./../atoms/Article.svelte"
	import Ilustration from "./../atoms/Ilustration.svelte"

	export let copyText; 
	export let img; 
	export let order = "left"; 	
</script>

{#if order == "left"}

<div class=" mw8 cf mw6-m ph3-ns ph3-m ph1 center mv6-l mv4">
  <div class=" fl w-50-ns w-100-m w-100 w3 pa2">
			<Article {copyText} />
	</div>
  <div class="  fl w-50-ns w-100-m w-100 pa2 tc tc-m tl-ns ">
		<Ilustration {img}/>
	</div>
</div>

{:else if order == "right"}
<div class=" mw8 cf mw6-m ph3-ns ph3-m ph1 center mv6-l mv4">

  <div class=" fr w-50-ns w-100-m w-100 w3 pa2 ">
			<Article {copyText}/>
	</div>
  <div  class="  fl w-50-ns w-100-m w-100 pa2 tc tc-m">
		<Ilustration {img}/>
	</div></div>
{/if}
