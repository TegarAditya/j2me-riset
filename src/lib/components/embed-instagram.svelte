<script lang="ts">
	export let url: string;
</script>

<iframe
	class="mx-auto w-full md:w-2/3 min-h-[400px] md:min-h-[500px] rounded-lg"
	title="instagram feed"
	src={`${url}/embed/captioned`}
	name="myIFrame"
></iframe>
