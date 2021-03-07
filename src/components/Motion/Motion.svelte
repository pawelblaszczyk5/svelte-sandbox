<script lang="ts">
	import {spring, tweened} from 'svelte/motion';
	import {cubicOut} from 'svelte/easing';
	import BackToHome from '../BackToHome/BackToHome.svelte';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut,
	});

	const coords = spring(
		{x: 50, y: 50},
		{
			stiffness: 0.15,
			damping: 0.3,
		},
	);
</script>

<section>
	<BackToHome />
	<div>
		<progress value={$progress} />
		<button on:click={() => progress.set(0)}> 0% </button>
		<button on:click={() => progress.set(0.25)}> 25% </button>
		<button on:click={() => progress.set(0.5)}> 50% </button>
		<button on:click={() => progress.set(0.75)}> 75% </button>
		<button on:click={() => progress.set(1)}> 100% </button>
	</div>
	<svg on:mousemove={(e) => coords.set({x: e.clientX, y: e.clientY})}>
		<circle cx={$coords.x} cy={$coords.y} r="25" />
	</svg>
</section>

<style>
	:global(section > *) {
		z-index: 2;
	}

	svg {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}

	circle {
		fill: #ff3e00;
	}
</style>
