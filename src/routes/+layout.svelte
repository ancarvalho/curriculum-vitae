<script lang="ts">

  import "../index.css";
  import { addTranslations, getTranslationProps, locale, locales, t } from '$lib/translations';
	import { page } from "$app/stores";
	import { invalidate, invalidateAll } from "$app/navigation";


	const handleLocaleChange = async ({currentTarget}: {currentTarget: HTMLSelectElement}) => {
    const {value} = currentTarget;
    const {url} = $page;
    

    const translationProps = await getTranslationProps(value, url.pathname)

    addTranslations(...translationProps);

    if ($locale !== value) {
      $locale = value
      localStorage.setItem("local", value)
      await invalidateAll()
    }

    
  };

</script>


<select class="absolute top-0 right-0" on:change="{handleLocaleChange}">
  {#each $locales as l}
    <option selected={$locale === l}  value="{l}">{$t(`lang.${l}`)}</option>
  {/each}
</select>


<slot />