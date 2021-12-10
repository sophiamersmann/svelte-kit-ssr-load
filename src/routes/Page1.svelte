<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ fetch }) => {
		const res = await fetch(`/load`);
		if (res.ok)
			return {
				props: {
					myProp: await res.json()
				}
			};
	};
</script>

<script>
	export let myProp;
</script>

I am page 1 and loaded <b>{myProp.someData}</b>
<br />
<a href="/">index page</a>
