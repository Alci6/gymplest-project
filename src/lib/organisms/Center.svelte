<script>
import InfoImg from "./../molecules/InfoImg.svelte";
	import {copyweb} from "./../../copyweb.js";  
console.log(copyweb)
</script>

<div id="information">
{#each copyweb as {title, highlight,  content, img}, i}
	<InfoImg 
		order={ i % 2 ? "left" : "right" }
		{img}
		copyText={{title , highlight, content } }
	/> 
{/each}


	</div>
