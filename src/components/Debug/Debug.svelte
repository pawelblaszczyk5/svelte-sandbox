<script lang="ts">
	import BackToHome from '../BackToHome/BackToHome.svelte';

	let value = 5;
</script>

<section>
	<BackToHome />
	<input type="number" bind:value />
	{@debug value}
</section>

<style>
</style>
