<script lang="ts">
	let count = 5;
</script>

<section>
	Reactivity
	<div>
		<button
			on:click={() => {
				count *= 2;
			}}>
			Double the {count}
		</button>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
