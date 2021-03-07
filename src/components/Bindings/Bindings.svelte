<script lang="ts">
	let name = 'world';
	let number1 = 0;
	let number2 = 0;
</script>

<section>
	<input type="text" bind:value={name} />
	<p>Hello {name}</p>
	<p>Raise x to the power of y</p>
	<div>
		<input type="number" bind:value={number1} />
		<input type="number" bind:value={number2} />
	</div>
	<p>Result: {number1 ** number2}</p>
</section>

<style>
</style>
