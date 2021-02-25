<script lang="ts">
	import {Link} from 'svelte-routing';
</script>

<nav>
	<nav>
		<Link to="introduction">Introduction</Link>
		<Link to="reactivity">Reactivity</Link>
		<Link to="props">Props</Link>
		<Link to="logic">Logic</Link>
	</nav>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
	}
</style>
