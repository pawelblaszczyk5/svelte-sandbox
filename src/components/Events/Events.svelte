<script lang="ts">
	import BackToHome from '../BackToHome/BackToHome.svelte';
	import CustomEvent from './CustomEvent.svelte';
	import EventForwarder from './EventForwarder.svelte';
	import SuperCustomButton from './SuperCustomButton.svelte';

	let isHoveringParagraph = false;
	let mouseCoordinates = {x: 0, y: 0};

	const handleMouseEnter = () => {
		isHoveringParagraph = true;
	};

	const handleMouseLeave = () => {
		isHoveringParagraph = false;
	};

	let wasSwapped = false;
	const swap = () => {
		wasSwapped = true;
	};
	let wasBombed = false;
	let bombWasForwarded = false;
</script>

<section>
	<BackToHome />
	<div
		style="color: {isHoveringParagraph ? 'red' : null}; background-color: {isHoveringParagraph ? 'steelBlue' : null}"
		on:mouseenter={handleMouseEnter}
		on:mouseleave={handleMouseLeave}>
		Try to hover me!
	</div>
	<div on:mousemove={({clientX, clientY}) => (mouseCoordinates = {x: clientX, y: clientY})}>
		Hover over me to get mouse coordinates {mouseCoordinates.x}
		{mouseCoordinates.y}
	</div>
	<div>
		<button disabled={wasSwapped} on:click|once={swap}>I can be clicked once and only once</button>
		{#if wasSwapped}
			<p>I was clicked at least once</p>
		{:else}
			<p>I was not clicked once</p>
		{/if}
	</div>
	<CustomEvent on:bomb|once={() => (wasBombed = true)} />
	{#if wasBombed}
		<p>I was bombed</p>
	{/if}
	<EventForwarder on:bomb|once={() => (bombWasForwarded = true)} />
	{#if bombWasForwarded}
		<p>Bomb was forwarded</p>
	{/if}
	<SuperCustomButton on:click={() => window.alert('click event was forwarded')} />
</section>

<style>
	div {
		padding: 20px;
	}

	div:nth-child(2) {
		background-color: salmon;
		width: 100%;
		padding: 50px;
	}
</style>
