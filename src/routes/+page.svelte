<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { formatDate } from '$lib/utils/dateFormatter.js';

	export let data;
</script>

<div class="my-10 mx-auto text-center text-2xl md:text-5xl font-extrabold text-white px-2 w-fit">
	<h1
		class="bg-slate-800 px-2 py-1 w-fit mx-auto -rotate-2 hover:rotate-0 dark:text-slate-800 dark:bg-white"
	>
		"Welcome to Divisi Riset"
	</h1>
	<h1 class="bg-orange-500 px-2 py-1 w-fit mx-auto rotate-1 hover:rotate-0">Peserta #J2ME</h1>
	<h1 class="bg-black p-2 w-fit mx-auto font-mono">&lt;!--2023--&gt;</h1>
</div>
<div class="grid grid-cols-none md:grid-cols-2 xl:grid-cols-4 md:gap-1 xl:gap-4">
	{#each data.posts as post}
		<Card class="flex-col justify-between mb-3 my-2 sm:my-4">
			<div>
				<h5 class="mb-2 text-2xl font-mono font-bold tracking-tight text-gray-900 dark:text-white">
					{post.title}
				</h5>
				<p class="mb-2 font-thin text-gray-700 dark:text-gray-400">
					{formatDate(post.date)}
				</p>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
					{post.description}
				</p>
			</div>
			<div>
				{#if post.slug}
					<a data-sveltekit-preload-code="eager" href="/post/{post.slug}">
						<Button class="w-fit">
							Read more <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
						</Button>
					</a>
				{/if}
			</div>
		</Card>
	{/each}
</div>
