<script context="module" lang="ts">
	let count = 0;
	export const resetCounter = (): void => {
		count = 0;
	};
</script>

<script lang="ts">
	count++;
</script>

<p>I was created {count} {count > 1 ? 'times' : 'time'}!</p>

<style>
</style>
