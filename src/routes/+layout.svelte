<script lang="ts">
	import '../index.css';
	import { addTranslations, getTranslationProps, locale, locales, t } from '$lib/translations';
	import { page } from '$app/stores';
	import { invalidate, invalidateAll } from '$app/navigation';
	import  local from '$lib/store/local_store';

	let localValue: string;



	const unsubscribe = local.subscribe(async (value) => {
		localValue = value;
	});

	const handleLocaleChange = async ({ currentTarget }: { currentTarget: HTMLSelectElement }) => {
		const { value } = currentTarget;
		const { url } = $page;

		const translationProps = await getTranslationProps(value, url.pathname);

		addTranslations(...translationProps);

		if ($locale !== value) {
			$locale = value;
			
		}

		local.set(value);
	};
</script>

<select class="absolute top-0 right-0" on:change={handleLocaleChange}>
	{#each $locales as l}
		<option selected={$locale === localValue} value={l}>{$t(`lang.${l}`)}</option>
	{/each}
</select>

<slot />
