<script lang="ts">
	import {Link} from 'svelte-routing';
</script>

<nav>
	<Link to="introduction">Introduction</Link>
	<Link to="reactivity">Reactivity</Link>
	<Link to="props">Props</Link>
	<Link to="logic">Logic</Link>
	<Link to="events">Events</Link>
	<Link to="bindings">Bindings</Link>
	<Link to="lifecycle">Lifecycle</Link>
	<Link to="stores">Stores</Link>
	<Link to="motion">Motion</Link>
	<Link to="transitions">Transitions</Link>
	<Link to="actions">Actions</Link>
	<Link to="classes">Classes</Link>
	<Link to="slots">Slots</Link>
	<Link to="context">Context</Link>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
	}
</style>
