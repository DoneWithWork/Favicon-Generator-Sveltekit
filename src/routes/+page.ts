import { PUBLIC_BASE_URL } from '$env/static/public';
export const load = ({ params }) => {
	return {
		baseUrl: PUBLIC_BASE_URL
	};
};
