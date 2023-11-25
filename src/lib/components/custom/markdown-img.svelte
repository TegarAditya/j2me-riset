<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<img {src} {alt} loading="lazy" />
<p class="text-center italic font-light">{alt}</p>
