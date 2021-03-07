<script lang="ts">
	import PropsTest from './PropsTest.svelte';
	import PropsSpreadTest from './PropsSpreadTest.svelte';
	import BackToHome from '../BackToHome/BackToHome.svelte';

	const personalInformation = {
		name: 'Paweł',
		surname: 'Błaszczyk',
		age: 22,
	};
</script>

<section>
	<BackToHome />
	<PropsTest stringProp="Props in svelte are super easy" />
	<PropsSpreadTest {...personalInformation} />
</section>
