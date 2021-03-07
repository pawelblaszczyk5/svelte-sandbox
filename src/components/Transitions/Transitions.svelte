<script lang="ts">
	import {elasticOut} from 'svelte/easing';
	import {scale} from 'svelte/transition';
	import {fade, fly} from 'svelte/transition';

	let shouldShowFlyingParagraph = true;
	let shouldShowInOutingParagraph = false;

	const spin = (node: HTMLElement, {duration}: {duration: number}) => {
		return {
			duration,
			css: (t: number) => {
				const eased = elasticOut(t);
				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${~~(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`;
			},
		};
	};

	const typewriter = (node: HTMLElement, {timeoutBetweenChars}: {timeoutBetweenChars: number}) => {
		const text = node.textContent ?? '';
		const duration = text.length * timeoutBetweenChars;

		return {
			duration,
			tick: (t: number) => {
				node.textContent = text.slice(0, Math.floor(t * text.length)) + (t === 1 ? '' : '|');
			},
		};
	};

	let divCount = 5;
	let arr: Array<number> = [];
	let shouldShowDivs = true;
	$: arr = [...Array(divCount).keys()];
</script>

<section>
	<p transition:fade={{duration: 2000}}>Simple fade!</p>
	{#if shouldShowFlyingParagraph}
		<p transition:fly={{y: 500, x: 350, duration: 1500}}>I am flying like a bird</p>
	{/if}
	<label><input type="checkbox" bind:checked={shouldShowFlyingParagraph} />I want to fly</label>
	{#if shouldShowInOutingParagraph}
		<p in:fly={{y: 500, x: 350, duration: 1500}} out:fade={{duration: 1000}}>I am flying like a bird</p>
	{/if}
	<label><input type="checkbox" bind:checked={shouldShowInOutingParagraph} />Run animation of above paragraph</label>
	<p in:spin={{duration: 3500}}>Super transition</p>
	<p in:typewriter={{timeoutBetweenChars: 80}} on:introend={() => window.alert('Typewriter has ended')}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, culpa ducimus!
	</p>
	<input type="number" bind:value={divCount} />
	<label><input type="checkbox" bind:checked={shouldShowDivs} />Maybe try to hide divs?</label>
	{#if shouldShowDivs}
		<div>
			{#each arr as number}
				<p transition:scale|local={{duration: 1500}}>{number}</p>
			{/each}
		</div>
	{/if}
</section>

<style>
	label {
		user-select: none;
	}

	input {
		display: inline-block;
		margin-right: 0.5rem;
	}
</style>
