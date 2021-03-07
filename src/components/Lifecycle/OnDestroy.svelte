<script lang="ts">
	import {onDestroy} from 'svelte';

	onDestroy(() => {
		window.alert('I was destroyed');
	});
</script>

<p>I am here onDestroy</p>
