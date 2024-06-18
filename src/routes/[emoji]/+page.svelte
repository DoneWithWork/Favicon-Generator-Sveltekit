<script lang="ts">
	export let data;

	// Simple sanitization function
	function sanitizeInput(input: any) {
		const allowedCharacters = /^[\w\s\p{Emoji_Presentation}]+$/u; // Alphanumeric, space, and emojis
		if (allowedCharacters.test(input)) {
			return input;
		}
		return false;
	}

	// Sanitize user input
	const sanitizedInput = sanitizeInput(data.slug);
</script>

<svelte:head>
	<title>Emoji</title>
</svelte:head>

{#if sanitizedInput === false}
	<p>Invalid input</p>
{:else}
	<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20">
		<text x="0" y="14">{sanitizedInput}</text>
	</svg>
{/if}
