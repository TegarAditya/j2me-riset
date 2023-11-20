<script lang="ts">
	import { formatDate } from '$lib/utils/dateFormatter';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta name="description" content={data.meta.description} />
</svelte:head>

<article class="px-1 py-2 md:max-w-3xl">
	<!-- Title -->
	<h1
		class="text-2xl md:text-3xl xl:text-4xl md:py-3 xl:text-center font-extrabold text-black dark:text-white"
	>
		{data.meta.title}
	</h1>
	<p class="text-black dark:text-white xl:text-center font-light">
		Published at {formatDate(data.meta.date)}
	</p>

	<!-- Tags -->
	<div class="flex flex-wrap xl:justify-center my-3 pb-3 xl:pb-5">
		{#each data.meta.categories as category}
			<div class="bg-orange-500 rounded-full px-2 mx-1">
				<span class="text-white">&num;{category}</span>
			</div>
		{/each}
	</div>

	<!-- Post -->
	<div
		class="prose prose-slate md:prose-lg lg:prose-xl dark:prose-invert prose-headings:font-bold prose-img:rounded-xl prose-img:mx-auto prose-img:w-full"
	>
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		margin-inline: auto;
	}
</style>
