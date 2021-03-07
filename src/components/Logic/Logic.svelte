<script lang="ts">
	import axios from 'axios';
	import BackToHome from '../BackToHome/BackToHome.svelte';

	interface MockData {
		color: string;
		animal: string;
	}

	const shouldShowSomething = false;
	const shouldShowSomethingElse = true;
	let changeMeBoolean = true;
	let numberWhichWillBeIncreased = 0;
	const mySuperIterableArray = [0, 1];
	const nicePromise = axios.get<MockData>('https://my.api.mockaroo.com/mockTest?key=d2b964e0');
</script>

<section>
	<BackToHome />
	{#if shouldShowSomething}
		I should not be visible
	{/if}
	{#if shouldShowSomethingElse}
		I should be visible
	{/if}

	<button on:click={() => (changeMeBoolean = !changeMeBoolean)}> Swap content of paragraph below</button>
	<p>
		{#if changeMeBoolean}
			Hello, have a nice day!
		{:else}
			Goodbye :)
		{/if}
	</p>

	<button disabled={numberWhichWillBeIncreased >= 5} on:click={() => (numberWhichWillBeIncreased += 1)}>Increase me please </button>
	<p>Number: {numberWhichWillBeIncreased}</p>
	<p>
		{#if numberWhichWillBeIncreased < 2}
			Your number is so little :(
		{:else if numberWhichWillBeIncreased < 5}
			Not bad, not bad
		{:else}
			Very nice number, very big
		{/if}
	</p>
	<p>Top 10 numbers</p>
	<p>
		{#each mySuperIterableArray as number (number)}
			<span>{number} </span>
		{/each}
	</p>
	{#await nicePromise}
		We are waiting for fetching your data
	{:then { data }}
		Your data is something <span style="color: {data.color}">{data.animal}</span>
	{:catch err}
		Sorry, unexpected error, try again later, {err}
	{/await}
</section>
