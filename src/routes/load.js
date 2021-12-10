/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async () => {
	return {
		status: 200,
		body: {
			someData: 'some data'
		}
	};
};
