<script lang="ts">
	import '../index.css';
	import { addTranslations, getTranslationProps, locale, locales, t } from '$lib/translations';
	import { page } from '$app/stores';
	import  {local, } from '$lib/stores/local_store';
	import content from '$lib/stores/content_store';

	let localValue: string;

	const unsubscribe = local.subscribe(async (value) => {
		localValue = value;
	});


	const fetchContent= async (value: string) => {
		const res = await fetch(`/translations/${value}/content.json`)
    const data = await res.json()
    content.set(data)
	}

	const handleLocaleChange = async ({ currentTarget }: { currentTarget: HTMLSelectElement }) => {
		const { value } = currentTarget;
		const { url } = $page;

		const translationProps = await getTranslationProps(value, url.pathname);

		addTranslations(...translationProps);

		if ($locale !== value) {
			$locale = value;
			local.set(value);
			await fetchContent(value)

		}

		
	};
</script>

<select class="absolute top-0 right-0" on:change={handleLocaleChange}>
	{#each $locales as l}
		<option selected={$locale === l} value={l}>{$t(`lang.${l}`)}</option>
	{/each}
</select>

<slot />
