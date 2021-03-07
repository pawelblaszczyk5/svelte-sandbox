<script lang="ts">
	import {count} from '../../stores/testWritableStore';
</script>

<button on:click={() => count.update((n) => n / 2)}>Decrease number by double</button>
