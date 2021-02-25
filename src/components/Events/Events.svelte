<script lang="ts">
	let isHoveringParagraph = false;
	let mouseCoordinates = {x: 0, y: 0};

	const handleMouseEnter = () => {
		isHoveringParagraph = true;
	};

	const handleMouseLeave = () => {
		isHoveringParagraph = false;
	};
</script>

<section>
	<div
		style="color: {isHoveringParagraph ? 'red' : null}; background-color: {isHoveringParagraph ? 'steelBlue' : null}"
		on:mouseenter={handleMouseEnter}
		on:mouseleave={handleMouseLeave}>
		Try to hover me!
	</div>
	<div on:mousemove={({clientX, clientY}) => (mouseCoordinates = {x: clientX, y: clientY})}>
		Hover over me to get mouse coordinates {mouseCoordinates.x}
		{mouseCoordinates.y}
	</div>
</section>

<style>
	div {
		padding: 20px;
	}

	div:nth-child(2) {
		background-color: salmon;
		width: 100%;
		padding: 50px;
	}
</style>
