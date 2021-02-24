<script lang="ts">
	import Test from './Test.svelte';

	let name = 'test';
	const asd = 'testaaa';
</script>

<section>
	Introduction
	{name}
	<Test asd="{asd}" />
</section>

<style>
</style>
