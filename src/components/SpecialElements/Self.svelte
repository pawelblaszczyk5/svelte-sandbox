<script lang="ts">
	export let shouldRecursive: boolean = true;
</script>

<p>
	Self works!
	{#if shouldRecursive}
		<svelte:self shouldRecursive={false} />
	{/if}
</p>

<style>
</style>
