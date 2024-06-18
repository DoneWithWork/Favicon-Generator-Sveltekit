<script lang="ts">
	import { page } from '$app/stores';
	const baseUrl = $page.url.pathname;
	console.log(baseUrl);
	function CopyKeyboard(e: Event) {
		const text = e.currentTarget!.children[0].textContent;
		navigator.clipboard.writeText(text);
	}

	export let data;
</script>

<svelte:head>
	<title>Favicon Generator</title>
</svelte:head>
<h1>Need a quick Favicon?</h1>
<p class="description">This website returns an emoji inside an SVG</p>
<p>Use it like <a href="/🔥">/🔥</a></p>

<p style="font-weight: 700;">Some examples</p>
<p>Replace any emoji after '/' to get back your favicon</p>
<button on:click={CopyKeyboard}>
	<code> &lt;link rel="icon" href="{data.baseUrl}/🔥" /&gt; </code>
</button>
<button on:click={CopyKeyboard}>
	<code> &lt;link rel="icon" href="{data.baseUrl}/👓" /&gt; </code>
</button>
<p>It works by serving the following SVG</p>
<code>
	&lt;svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"/&gt;
	&lt;text x="0" y="14"&gt;🔥&lt;/text&gt; &lt;/svg&gt;
</code>
<footer style="margin-top: 30px; position:absolute; bottom:10px;">
	Made by <a href="https://github.com/DoneWithWork">DoneWithWork</a> &copy;
</footer>

<style>
	h1 {
		font-size: 2rem;
		font-weight: 500;
	}
	p {
		font-size: 1.2rem;
		margin-top: 10px;
	}
	.description {
		font-size: 1.5rem;
	}
	button {
		border: none;
		font-size: 1.2rem;
		margin: 30px 20px;
		font-weight: 600;
		cursor: pointer;
		transition: transform 0.2s ease;
	}

	code {
		padding: 20px 30px;
	}
</style>
