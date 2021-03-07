<script lang="ts">
	import {onMount} from 'svelte';

	onMount(() => {
		window.alert('I was mounted');
		return () => {
			window.alert('I was mounted to be destroyed');
		};
	});
</script>

<p>I am here onMount and I returned function from mounting</p>
