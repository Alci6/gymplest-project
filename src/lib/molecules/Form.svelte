<script>
	import Button from './../atoms/Button.svelte';
	import Input from './../atoms/Input.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import Toast from "./../atoms/Toast.svelte"; 
	import {db} from "./../../firebase.js"; 

	export let title = "El equipamiento que necesitas donde y cuando lo necesites."

	let userDataObject = { id: '', email: '', postalCode: '', time: "" };
	let { id, email, postalCode, time } = userDataObject;
	const timeElapsed = Date.now();
	const today = new Date(timeElapsed);

let showToast = false;  

	const changeToast = () => {
		showToast = !showToast;
		setTimeout(() => (showToast = !showToast), 2000);
	};

	let onClick = () => {
		id = uuidv4();
		time =  today.toUTCString();  
		if(email){
		db.collection("leads").doc(id).set({id, email, postalCode, time})
		
		changeToast(); 
		email = '';
		postalCode = ''; 

		}
	};


	export let placeholderEmail = "rafa.nadal@gmail.com"; 

	export let placeholderPostalCode = "28008"; 
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
		<div class="bg-white ma3 pa4 maxwd center ml5-l br3 shadow-4 noselect">
			<h1 class="roboto-bold noselect f3  b lh-title mt0 mb1 mb2-ns measure word-wrap dark-gray">
				{title}
			</h1>

			<div class="mb3">
				<h4 class=" noselect mb1 dark-gray ">email</h4>
				<Input bind:value={email} placeholder="{placeholderEmail} " />
			</div>

			<div>
				<h4 class="noselect mb1 dark-gray ">código postal</h4>

				<Input bind:value={postalCode} placeholder="{placeholderPostalCode} " />
			</div>
			<div class="tr mr4 roboto">
				<Button {onClick} type={'orange-btn'}>Únete</Button>
			</div>
		</div>
</section>
	<Toast {showToast} >Información Recibida</Toast> 

