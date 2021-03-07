<script lang="ts">
	import BackToHome from '../BackToHome/BackToHome.svelte';
	import Nested from './Nested.svelte';

	const name = 'testName';
	const src = 'https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto';
	const htmlEntities = '&amp; &copy;';
</script>

<section>
	<BackToHome />
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
	.special {
		color: #333333;
		font-weight: bolder;
	}
</style>
