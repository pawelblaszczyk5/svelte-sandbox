<script lang="ts">
	import {randomNumber} from '../../stores/testCustomStore';
</script>

<button on:click={() => randomNumber.setToRandom()}>Randomize the number from inside of other component</button>
