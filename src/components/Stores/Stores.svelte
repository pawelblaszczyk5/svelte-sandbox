<script lang="ts">
	import {randomNumber} from '../../stores/testCustomStore';
	import {elapsed} from '../../stores/testDerivedStore';
	import {time} from '../../stores/testReadableStore';
	import {count} from '../../stores/testWritableStore';
	import BackToHome from '../BackToHome/BackToHome.svelte';
	import DeDouble from './DeDouble.svelte';
	import Double from './Double.svelte';
	import RandomNumberSetter from './RandomNumberSetter.svelte';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: false,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit',
	});
</script>

<section>
	<BackToHome />
	<p>That's my super stored value {$count}</p>
	<Double />
	<DeDouble />
	<p>Current time: {formatter.format($time)}</p>
	<p>You are watching my sandbox for {$elapsed} seconds</p>
	<p>Here goes random number {$randomNumber}</p>
	<RandomNumberSetter />
	<p>But maybe you want to help randomizer?</p>
	<input bind:value={$randomNumber} />
</section>
