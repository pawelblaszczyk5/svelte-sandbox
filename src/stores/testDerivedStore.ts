import {derived} from 'svelte/store';
import {time} from './testReadableStore';

const start = new Date().getTime();

export const elapsed = derived(time, ($time) => Math.round(($time.getTime() - start) / 1000));
