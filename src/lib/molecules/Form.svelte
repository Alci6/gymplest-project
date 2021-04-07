<script>
	import Button from './../atoms/Button.svelte';
	import Input from './../atoms/Input.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import Toast from "./../atoms/Toast.svelte"; 
	import {db} from "./../../firebase.js"; 

	let userDataObject = { id: '', email: '', postalCode: '' };
	let { id, email, postalCode } = userDataObject;


let showToast = false;  

	const changeToast = () => {
		showToast = !showToast;
		setTimeout(() => (showToast = !showToast), 2000);
	};

	let onClick = () => {
		id = uuidv4();

		if(email){
		db.collection("leads").doc(id).set({id, email, postalCode})

		changeToast(); 
		email = '';
		postalCode = ''; 

		}
	};
</script>
<style>
	.maxwd{
			max-width: 26rem;
	}

	.roboto {
		font-family: Roboto;
	}

	.roboto-bold {
		font-family: Roboto-Bold;
	}
</style>
<section>
		<div class=" bg-white ma3 pa4 maxwd center ml5-l br3 shadow-4 noselect">
			<h1 class="roboto-bold noselect f3  b lh-title mt0 mb1 mb2-ns measure word-wrap dark-gray">
				El equipamiento que necesitas donde y cuando lo necesites.
			</h1>

			<div class="mb3">
				<h4 class=" noselect mb1 dark-gray ">email</h4>
				<Input bind:value={email} placeholder="rafa.nadal@gmail.com" />
			</div>

			<div>
				<h4 class="noselect mb1 dark-gray ">código postal</h4>

				<Input bind:value={postalCode} placeholder="28008" />
			</div>
			<div class="tr mr4 roboto">
				<Button {onClick} type={'orange-btn'}>Únete</Button>
			</div>
		</div>
</section>
	<Toast {showToast} >Información Recibida</Toast> 

