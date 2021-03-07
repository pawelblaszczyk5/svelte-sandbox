<script lang="ts">
	import {Router, Route} from 'svelte-routing';
	import Nav from './components/Nav.svelte';
	import Reactivity from './components/Reactivity/Reactivity.svelte';
	import Props from './components/Props/Props.svelte';
	import Logic from './components/Logic/Logic.svelte';
	import Events from './components/Events/Events.svelte';
	import Introduction from './components/Introduction/Introduction.svelte';
	import Bindings from './components/Bindings/Bindings.svelte';
	import Lifecycle from './components/Lifecycle/Lifecycle.svelte';

	export let url = '';
</script>

<main>
	<h1>Svelte tutorial and sandbox</h1>
	<Router {url}>
		<Route path="/">
			<Nav />
		</Route>
		<Route path="introduction" component={Introduction} />
		<Route path="reactivity" component={Reactivity} />
		<Route path="props" component={Props} />
		<Route path="logic" component={Logic} />
		<Route path="events" component={Events} />
		<Route path="bindings" component={Bindings} />
		<Route path="lifecycle" component={Lifecycle} />
	</Router>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	:global(section) {
		display: flex;
		flex-direction: column;
		gap: 1em;
		align-items: center;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
