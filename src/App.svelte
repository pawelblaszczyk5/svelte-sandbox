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
	import Stores from './components/Stores/Stores.svelte';
	import Motion from './components/Motion/Motion.svelte';
	import Transitions from './components/Transitions/Transitions.svelte';
	import Actions from './components/Actions/Actions.svelte';
	import Classes from './components/Classes/Classes.svelte';
	import Slots from './components/Slots/Slots.svelte';
	import Context from './components/Context/Context.svelte';
	import SpecialElements from './components/SpecialElements/SpecialElements.svelte';
	import ModuleContext from './components/ModuleContext/ModuleContext.svelte';
	import Debug from './components/Debug/Debug.svelte';

	export let url = '';
</script>

<main>
	<h1>Svelte tutorial and sandbox</h1>
	<Router {url}>
		<Route path="/" component={Nav} />
		<Route path="introduction" component={Introduction} />
		<Route path="reactivity" component={Reactivity} />
		<Route path="props" component={Props} />
		<Route path="logic" component={Logic} />
		<Route path="events" component={Events} />
		<Route path="bindings" component={Bindings} />
		<Route path="lifecycle" component={Lifecycle} />
		<Route path="stores" component={Stores} />
		<Route path="motion" component={Motion} />
		<Route path="transitions" component={Transitions} />
		<Route path="actions" component={Actions} />
		<Route path="classes" component={Classes} />
		<Route path="slots" component={Slots} />
		<Route path="context" component={Context} />
		<Route path="special_elements" component={SpecialElements} />
		<Route path="module_context" component={ModuleContext} />
		<Route path="debug" component={Debug} />
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
