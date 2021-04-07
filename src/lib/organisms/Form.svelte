<script>
	import Button from './../atoms/Button.svelte';
	import Input from './../atoms/Input.svelte';
	import { v4 as uuidv4 } from 'uuid';

	import {db} from "./../../firebase.js"; 

	let userDataObject = { id: '', email: '', postalCode: '' };
	let { id, email, postalCode } = userDataObject;



	let onClick = () => {
		id = uuidv4();

		if(email){

		
		db.collection("leads").doc(id).set({id, email, postalCode})
		email = '';
		postalCode = ''; 
		}
	};
</script>

<section>
	<form action="">
		<div class="formDiv ma3 pa4 ml5 br3 shadow-4 noselect">
			<h1 class="roboto-bold noselect f3  b lh-title mt0 mb1 mb2-ns measure word-wrap dark-gray">
				El equipamiento que necesitas donde y cuando lo necesites.
			</h1>

			<div class="mb3">
				<h4 class=" noselect mb1 dark-gray roboto">email</h4>
				<Input bind:value={email} placeholder="federer@gmail.com" />
			</div>

			<div>
				<h4 class="noselect mb1 dark-gray roboto">código postal</h4>

				<Input bind:value={postalCode} placeholder="28008" />
			</div>
			<div class="tr mr4">
				<Button {onClick} type={'orange-btn'}>Únete</Button>
			</div>
		</div>
	</form>
</section>

<style>
	.formDiv {
		height: 26em;
		width: 26em;
		background-color: white;
	}

	.roboto {
		font-family: Roboto;
	}

	.roboto-bold {
		font-family: Roboto-Bold;
	}
</style>
