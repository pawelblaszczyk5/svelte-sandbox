<script lang="ts">
	import {count} from '../../stores/testWritableStore';
</script>

<button on:click={() => count.update((n) => n * 2)}>Increase number by double</button>
