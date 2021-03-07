<script lang="ts">
	import {onMount} from 'svelte';
	import BackToHome from '../BackToHome/BackToHome.svelte';
	import BeforeAfterUpdate from './BeforeAfterUpdate.svelte';
	import OnBoth from './OnBoth.svelte';
	import OnDestroy from './OnDestroy.svelte';

	interface photo {
		albumId: number;
		title: string;
		url: string;
		thumbnailUrl: string;
	}

	let photos: Array<photo> = [];

	onMount(() => {
		setTimeout(async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=3');
			photos = await res.json();
		}, 3000);
	});

	let shouldShowOnDestroyComponent = true;
	let shouldShowOnBothComponent = false;
</script>

<section>
	<BackToHome />
	<p>Example photos downloaded on mount</p>
	<div class="gallery">
		{#each photos as photo}
			<img class="photo" src={photo.url} alt={photo.title} />
		{:else}
			<p>Loading...</p>
		{/each}
	</div>
	<div>
		{#if shouldShowOnDestroyComponent}
			<OnDestroy />
			<button on:click={() => (shouldShowOnDestroyComponent = false)}>Destroy me</button>
		{/if}
	</div>
	<div>
		{#if shouldShowOnBothComponent}
			<OnBoth />
		{/if}
		<button on:click={() => (shouldShowOnBothComponent = !shouldShowOnBothComponent)}>
			{shouldShowOnBothComponent ? 'Destroy me' : 'Mount me'}
		</button>
	</div>
	<BeforeAfterUpdate />
</section>

<style>
	.gallery {
		display: flex;
		gap: 10px;
	}

	.photo {
		max-width: 150px;
		max-height: 150px;
	}
</style>
