<script lang="ts">
	import {onMount} from 'svelte';
	import BackToHome from '../BackToHome/BackToHome.svelte';
	import SuperInput from './SuperInput.svelte';

	let name = 'world';
	let number1 = 0;
	let number2 = 0;
	let isChecked = false;
	let isYes = 'yes';
	let value = 'Textarea bind test';

	const testValues = [
		{id: 1, text: 'Lorem ipsum 1'},
		{id: 2, text: 'Lorem ipsum 2'},
		{id: 3, text: 'Lorem ipsum 3'},
	];

	let selectedValue = testValues[1];

	const flavors = ['Strawberry', 'Vanilla', 'Milk', 'Chocolate'];
	let selectedFlavors = [flavors[0], flavors[1]];
	let contentEditableInnerHtml = '<u>Test</u>';
	let divWidth;
	let divHeight;
	let div: HTMLElement;

	onMount(() => {
		div.textContent = 'I was set after initialization';
	});

	let niceNumber = 3;
</script>

<section>
	<BackToHome />
	<input type="text" bind:value={name} />
	<p>Hello {name}</p>
	<p>Raise x to the power of y</p>
	<div>
		<input type="number" bind:value={number1} />
		<input type="number" bind:value={number2} />
	</div>
	<p>Result: {number1 ** number2}</p>
	<label><input type="checkbox" bind:checked={isChecked} /> Input is {isChecked ? 'checked' : 'unchecked'}</label>
	<div>
		<label><input type="radio" bind:group={isYes} value="yes" />Something yes</label>
		<label><input type="radio" bind:group={isYes} value="not" />Something not</label>
		{isYes}
	</div>
	<div>
		<textarea bind:value />
		<p>{value}</p>
	</div>
	<div>
		<select bind:value={selectedValue}>
			{#each testValues as mockValue}
				<option value={mockValue}>{mockValue.text}</option>
			{/each}
		</select>
		<p>Selected value id: {selectedValue.id}, text: {selectedValue.text}</p>
	</div>
	<div>
		<select multiple bind:value={selectedFlavors}>
			{#each flavors as flavor}
				<option value={flavor}>{flavor}</option>
			{/each}
		</select>
	</div>
	<p>Your selected flavors are: {selectedFlavors.length ? selectedFlavors.join(', ') : 'none'}</p>
	<div class="contentEditable" contenteditable bind:innerHTML={contentEditableInnerHtml} />
	<pre>{contentEditableInnerHtml}</pre>
	<div class="resizableOne" bind:clientWidth={divWidth} bind:clientHeight={divHeight}>Resize me please</div>
	<p>Dimensions of resizable div are {divWidth + 'x' + divHeight}</p>
	<div bind:this={div} />
	<SuperInput bind:testValue={niceNumber} />
	<p>Two way binding with input result with {niceNumber}</p>
</section>

<style>
	.contentEditable {
		padding: 10px;
		border: 1px solid #ff1275;
		outline: none;
	}

	.resizableOne {
		resize: both;
		overflow: auto;
		height: 45px;
		width: 300px;

		border: 1px solid cadetblue;
	}
</style>
