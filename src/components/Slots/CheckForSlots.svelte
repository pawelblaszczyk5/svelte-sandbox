<div>
	{#if $$slots.slotted}
		<slot name="slotted" />
	{:else}
		I wasn't slotted
	{/if}
</div>
