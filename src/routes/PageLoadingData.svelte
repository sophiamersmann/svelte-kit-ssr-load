<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ fetch }) => {
		const res = await fetch(`/api/data.json`);
		if (res.ok)
			return {
				props: {
					myProp: await res.json()
				}
			};
	};
</script>

<script>
	import { base } from '$app/paths';

	export let myProp;
</script>

I am page 2 and loaded <b>{myProp.someData}</b>
<br />
<a href="{base}/">index page</a>
