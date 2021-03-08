<script lang="ts">
	import BackToHome from '../BackToHome/BackToHome.svelte';

	let big = false;
	const classes = ['nice', 'funny', 'peculiar'];
	let selectedClass = 'peculiar';
</script>

<section>
	<BackToHome />
	<label><input type="checkbox" bind:checked={big} /> Add class to paragraph below</label>
	<p class:big>I am {big ? 'big' : 'small'}</p>
	<p>Select nice class for paragraph below</p>
	<select bind:value={selectedClass}>
		{#each classes as className}
			<option>{className}</option>
		{/each}
	</select>
	<p class:nice={selectedClass === 'nice'}>I am paragraph</p>
</section>

<style>
	.big {
		font-size: 2em;
		color: turquoise;
	}

	.nice {
		color: pink;
		padding: 0.5rem;
		border: 2px solid #21ffc2;
	}
</style>
