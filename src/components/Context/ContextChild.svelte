<script lang="ts">
	import {getContext} from 'svelte';
	import {key} from './Context';
	import type {Theme} from './Context';

	const theme: Theme = getContext(key);
</script>

<p style="color: {theme.primaryColor}">ContextChild works!</p>

<style>
</style>
