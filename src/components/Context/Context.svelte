<script lang="ts">
	import {setContext} from 'svelte';
	import BackToHome from '../BackToHome/BackToHome.svelte';
	import {key, theme} from './Context';
	import ContextChild from './ContextChild.svelte';

	setContext(key, theme);
</script>

<section>
	<BackToHome />
	<ContextChild />
</section>

<style>
</style>
