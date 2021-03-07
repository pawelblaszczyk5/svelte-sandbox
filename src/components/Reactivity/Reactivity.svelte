<script lang="ts">
	import BackToHome from '../BackToHome/BackToHome.svelte';

	let count = 1;
	let disabled = false;

	$: log2ofCount = Math.log2(count);
	$: if (count > 2 ** 5) {
		disabled = true;
	}
</script>

<section>
	<BackToHome />
	Reactivity
	<div>
		<button {disabled} on:click={() => (count *= 2)}>
			Double the {count}
		</button>
		<p>Log2 of count is {log2ofCount}</p>
	</div>
</section>
