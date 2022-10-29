<script lang="ts">
	import { onMount } from "svelte";
	import { translations } from "../data/translations";

	const sortedTranslations = translations.sort((p, q) =>
		p[0].toLowerCase() > q[0].toLowerCase() ? 1 : -1
	);

	let search = "";
	let searchInput: HTMLInputElement;

	$: filteredTranslations = sortedTranslations.filter(
		(translation) =>
			translation
				.toString()
				.toLowerCase()
				.includes(search.trim().toLowerCase())
	);

	onMount(() => searchInput?.focus());
</script>

<form on:submit|preventDefault>
	<label for="searchInput">Search</label>
	<input
		bind:this={searchInput}
		bind:value={search}
		type="search"
		id="searchInput"
	/>
</form>

<section>
	<table class="wrapper">
		<thead>
			<tr>
				<td>English</td>
				<td>German</td>
			</tr>
		</thead>
		<tbody>
			{#each filteredTranslations as [word_en, word_de]}
				<tr class:missing={word_de == "?"}>
					<td>{word_en}</td>
					<td>{word_de}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	{#if filteredTranslations.length == 0}
		<p>
			Sorry, there are no matches for <i>{search}</i>.
		</p>
	{/if}
</section>
