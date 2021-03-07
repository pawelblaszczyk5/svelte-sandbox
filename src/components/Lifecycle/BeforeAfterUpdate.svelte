<script lang="ts">
	import {afterUpdate, beforeUpdate} from 'svelte';

	beforeUpdate(() => {
		window.alert('Let me update pleeease');
	});
	afterUpdate(() => {
		window.alert('Thanks a lot');
	});
</script>

<p>Thanks for letting me stay up to date</p>
