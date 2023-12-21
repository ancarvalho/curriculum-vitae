<script>
    import "../app.css";
    import {locale, locales } from "$lib/store/i18n";
</script>

<p class="absolute top-0 right-0">
    <select bind:value={$locale}>
      {#each locales as l}
        <option value={l[0]}>{l[1]}</option>
      {/each}
    </select>
  </p>

<slot />
