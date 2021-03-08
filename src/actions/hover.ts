export const hover = (node: HTMLElement, size?: number): Record<string, unknown> => {
	const scaleMe = (): void => {
		node.style.transform = `scale(${size ?? 1.5})`;
		node.style.transition = 'transform 0.5s linear';
	};

	const unScaleMe = (): void => {
		node.style.transform = 'unset';
		node.removeEventListener('mouseleave', unScaleMe);
	};

	node.addEventListener('mouseenter', () => {
		scaleMe();
		node.addEventListener('mouseleave', unScaleMe);
	});

	return {
		destroy: () => {
			node.removeEventListener('mouseenter', scaleMe);
		},
	};
};
