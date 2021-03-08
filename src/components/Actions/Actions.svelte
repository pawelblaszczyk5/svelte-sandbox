<script lang="ts">
	import {hover} from '../../actions/hover';
	import BackToHome from '../BackToHome/BackToHome.svelte';

	let shouldShowActionParagraphs = true;
</script>

<section>
	<BackToHome />
	<label><input type="checkbox" bind:checked={shouldShowActionParagraphs} /> Show/Hide paragraphs</label>
	{#if shouldShowActionParagraphs}
		<p use:hover>Actions works!</p>
		<p use:hover={2}>Actions works!</p>
	{/if}
</section>

<style>
	section {
		overflow: hidden;
		padding: 2rem;
	}
</style>
