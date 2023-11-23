<script lang="ts">
	import { fly } from 'svelte/transition';
	import { bounceInOut } from 'svelte/easing';
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { formatDate } from '$lib/utils/dateFormatter.js';

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta property="og:title" content="J2ME on Divisi Riset Emailkomp" />
	<meta name="description" content="J2ME on Divisi Riset Emailkomp" />
</svelte:head>

<div class="px-5 py-2 mt-16 md:mt-20 xl:mt-20">
	<div class="my-10 mx-auto text-center text-2xl md:text-5xl font-extrabold text-white px-2 w-fit">
		<h1
			class="bg-slate-800 px-2 py-1 w-fit mx-auto -rotate-2 hover:rotate-0 dark:text-slate-800 dark:bg-white"
			in:fly={{ y: -100, easing: bounceInOut }}
		>
			"Welcome to Divisi Riset"
		</h1>
		<h1
			class="bg-orange-500 px-2 py-1 w-fit mx-auto rotate-1 hover:rotate-0"
			in:fly={{ y: -100, easing: bounceInOut, delay: 250 }}
		>
			Peserta #J2ME
		</h1>
		<h1
			class="bg-black p-2 w-fit mx-auto font-mono"
			in:fly={{ y: -100, easing: bounceInOut, delay: 500 }}
		>
			&lt;!--2023--&gt;
		</h1>
	</div>
	<div class="grid grid-cols-none md:grid-cols-2 xl:grid-cols-4 md:gap-4">
		{#each data.posts as post}
			<Card class="flex-col justify-between mb-3 my-2 sm:my-4">
				<div>
					<h5
						class="mb-2 text-2xl font-mono font-bold tracking-tight text-gray-900 dark:text-white"
					>
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
						<Button data-sveltekit-preload-code="eager" class="w-fit" href="/post/{post.slug}">
							Read more <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
						</Button>
					{/if}
				</div>
			</Card>
		{/each}
	</div>
</div>
