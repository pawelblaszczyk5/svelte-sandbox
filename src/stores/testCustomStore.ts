import {writable} from 'svelte/store';

const getRandomNumber = () => {
	return Math.floor(Math.random() * 101);
};

const createStore = () => {
	const {subscribe, set} = writable(getRandomNumber());

	return {
		subscribe,
		setToRandom: () => {
			set(getRandomNumber());
		},
		set,
	};
};

export const randomNumber = createStore();
