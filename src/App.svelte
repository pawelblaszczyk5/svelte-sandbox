<script lang="ts">
	import {Router, Route} from 'svelte-routing';
	import Introduction from './components/Introduction/Introduction.svelte';
	import Nav from './components/Nav.svelte';
	import Reactivity from './components/Reactivity/Reactivity.svelte';
	import Props from './components/Props/Props.svelte';
	import Logic from './components/Logic/Logic.svelte';

	export let url = '';
</script>

<main>
	<h1>Svelte tutorial and sandbox</h1>
	<Router {url}>
		<Route path="/">
			<Nav />
		</Route>
		<Route path="introduction">
			<Introduction />
		</Route>
		<Route path="reactivity">
			<Reactivity />
		</Route>
		<Route path="props">
			<Props />
		</Route>
		<Route path="logic">
			<Logic />
		</Route>
	</Router>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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
