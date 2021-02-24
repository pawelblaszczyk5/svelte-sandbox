<script lang="ts">
	import Nested from './Nested.svelte';

	const name = 'testName';
	const src = 'https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto';
	const htmlEntities = '&amp; &copy;';
</script>

<section>
	Introduction
	<div>
		<p>Uppercase variable {name.toUpperCase()}</p>
		<p>Concatenated variable {'super' + name}</p>
	</div>
	<div>
		<img {src} alt="test" />
	</div>
	<div>
		<Nested />
	</div>
	<div class="special">
		{@html htmlEntities}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.special {
		color: #333333;
		font-weight: bolder;
	}
</style>
