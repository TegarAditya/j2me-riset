<script lang="ts">
	import { blur, type BlurParams } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	export let url: string;
	const blurParams: BlurParams = {
		duration: 300,
		easing: cubicInOut
	};
</script>

{#key url}
	<div class="transition" in:blur={blurParams}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
