<script lang="ts">
	import BackToHome from '../BackToHome/BackToHome.svelte';
	import CheckForSlots from './CheckForSlots.svelte';
	import Hoverable from './Hoverable.svelte';
	import MultipleSlots from './MultipleSlots.svelte';
	import SlottableComponent from './SlottableComponent.svelte';
</script>

<section>
	<BackToHome />
	<p>Here is slottable component with default value</p>
	<SlottableComponent />
	<p>Here is slottable component with set value</p>
	<SlottableComponent>Test</SlottableComponent>
	<MultipleSlots>
		<span slot="name">Paweł</span>
		<span slot="surname">Błaszczyk</span>
	</MultipleSlots>
	<CheckForSlots />
	<CheckForSlots><span slot="slotted">Test with slot declared</span></CheckForSlots>
	<Hoverable let:hovering={active}>
		<div class:active>
			{#if active}
				<p>I am being hovered upon.</p>
			{:else}
				<p>Hover over me!</p>
			{/if}
		</div>
	</Hoverable>
</section>

<style>
</style>
