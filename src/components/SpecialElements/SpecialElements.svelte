<script lang="ts">
	import BackToHome from '../BackToHome/BackToHome.svelte';
	import Self from './Self.svelte';
	let keys: Array<string> = [];

	const handleKeyDown = (event: KeyboardEvent) => {
		keys.push(event.key);
		keys = keys;
	};

	let windowInnerHeight: number;
	let windowInnerWidth: number;
	let mouseIsHoveringBody = true;
</script>

<section>
	<BackToHome />
	<p>SpecialElements works!</p>
	<Self />
	<svelte:component this={Self} />
	<p>Press some keys</p>
	<p>{keys.join(', ')}</p>
	<p>Window size: {windowInnerWidth + 'x' + windowInnerHeight}</p>
	{#if mouseIsHoveringBody}
		<p>Mouse is hovering body</p>
	{/if}
</section>
<svelte:window on:keydown={handleKeyDown} bind:innerHeight={windowInnerHeight} bind:innerWidth={windowInnerWidth} />
<svelte:body on:mouseenter={() => (mouseIsHoveringBody = true)} on:mouseleave={() => (mouseIsHoveringBody = false)} />
<svelte:head>
	<title>I am changing title from inside of component</title>
</svelte:head>

<style>
</style>
