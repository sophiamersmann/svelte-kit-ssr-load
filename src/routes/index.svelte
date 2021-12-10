<script>
	import { base } from '$app/paths';

	console.log(base);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

I am the index page and link to a
<a href="{base}/PageLoadingData">page</a>
that loads data from /api/data.json
