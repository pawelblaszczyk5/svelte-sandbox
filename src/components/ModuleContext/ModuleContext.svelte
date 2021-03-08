<script lang="ts">
	import BackToHome from '../BackToHome/BackToHome.svelte';
	import TestComponent, {resetCounter} from './TestComponent.svelte';
	let currentTestComponentCount = 1;
	$: arr = new Array(currentTestComponentCount);
</script>

<section>
	<BackToHome />
	<button on:click={() => currentTestComponentCount++}> Add new TestComponent </button>
	<button on:click={resetCounter}>Reset counter</button>
	{#each arr as test}
		<TestComponent />
	{/each}
</section>

<style>
</style>
