<script lang="ts">
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	const dispatchCustomEvent = () => {
		dispatch('bomb');
	};
</script>

<button on:click={dispatchCustomEvent}>Bomb it</button>
